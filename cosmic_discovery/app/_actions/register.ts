"use server"

import prisma from "@/utils/db"
import hashPassword from "@/utils/hashPassword"
import { loginUser } from "@/utils/loginUser";
import { z } from "zod";

const addSchema = z.object({
    email: z.string().email().max(20),
    name: z.string().min(3).max(8, {message:"Not more than 8 characters"}),
    password: z.string().min(3),
    dateOfBirth: z.date(),
})


type fieldErrors = {
    email?: string[] | undefined;
    name?: string[] | undefined;
    password?: string[] | undefined;
    message?: string | undefined;
    dateOfBirth?: string[] | undefined;
}

export default async function register(prevState: unknown, formData: FormData) : 
    Promise<{
        message?:string
        data?:string
        error?:fieldErrors
    }> {
 
    console.log("Email: " + formData.get("email") +
        formData.get("name"))

    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        console.log("Error: ", result.error.formErrors.fieldErrors)
        return {error: result.error.formErrors.fieldErrors}
    }

    const data = result.data

    let {email, name, password} = data

    password = await hashPassword(password)

    try {
        await prisma.user.create({ data: { email, name, password, dateOfBirth: new Date(), } })
        
        // pull the recently added user to login
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (user) {
            await loginUser({ id: user.id.toString(), email: user.email, name: user.name }, false) // default remember = false
        } else {
            throw new Error("User not found after creation");
        }
    }
    catch (error) {
        console.log("error: " + error)
        return { error: {message: error + "" }}
    }
    return { message: "Added user successful" }
}