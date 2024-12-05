"use server"

import prisma from "@/utils/db"
import { getSession } from "@/utils/loginUser";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addSchema = z.object({
    id: z.string(),
    topic: z.string().min(3),
    detail: z.string().min(3),
})

type fieldErrors = {
    id?: string[] | undefined;
    topic?: string[] | undefined;
    detail?: string[] | undefined;
    message?: string | undefined;
}

export default async function updatePost(prevState: unknown, formData: FormData):
    Promise<{
        message?: string
        data?: string
        error?: fieldErrors
    }> {

    // console.log("Subject: " + formData.get("subject") +
    //     formData.get("detail1"))

    const user = await getSession()
    if (!user) return { error: { message: "session-expired, please re-login" } }

    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        console.log("Error: ", result.error.formErrors.fieldErrors)
        return { error: result.error.formErrors.fieldErrors }
    }

    const data = result.data
    const { id, topic, detail } = data

    try {
        await prisma.post.update({
            where: {
                id: +id
            },
            data: {
                topic,
                detail,
            },
        });
    }
    catch (error) {
        console.log("error: " + error)
        return { error: { message: error + "" } }
    }
    revalidatePath("/blog")
    return { message: "success" }
}