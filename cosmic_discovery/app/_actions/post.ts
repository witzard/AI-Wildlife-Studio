"use server"

import prisma from "@/utils/db" 
import { getSession } from "@/utils/loginUser";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addSchema = z.object({
    topic: z.string(),
    detail: z.string(),
})

type fieldErrors = {
    topic?: string[] | undefined;
    detail?: string[] | undefined;
    message?: string | undefined;
}

export default async function post(prevState: unknown, formData: FormData) : 
    Promise<{
        message?:string
        data?:string
        error?:fieldErrors
    }> {
 

    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        console.log("Error: ", result.error.formErrors.fieldErrors)
        return {error: result.error.formErrors.fieldErrors}
    }

    const data = result.data

    const {topic, detail} = data

    const user = await getSession()
    const userId = Number(user.id)

    try {
        await prisma.post.create({
            data: {
                topic,
                detail,
                userId,
                like:0,
            },
         })
    }
    catch (error) {
        console.log("error: " + error)
        return { error: {message: "Invalid email address" }}
    }
    revalidatePath("/blog")
    return { message: "Added user successful" }
}