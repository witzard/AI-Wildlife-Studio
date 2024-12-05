"use client"
import { Input } from "@/components/ui/inputField";
import post from "../_actions/post";
import { useActionState } from "react";
import SubmitButton from "../_component/SubmitButton";
import { redirect } from "next/navigation"

const INPUT_LABEL_STYLE = "block text-md font-medium text-gray-300";
export default function NewBlog() {

    const [data, action] = useActionState(post, {})

    if (data.message) {
        redirect("/blog")
    }

    return (
        <section className="bg-[url(https://th.bing.com/th/id/OIG4.Q8Bfua8NWu3HHOIO6x54?pid=ImgGn)] bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center py-4 ">
                <div className=" sm:mx-16 w-full max-w-screen-xl p-4 sm:p-16 relative block bg-[#210535]/90 rounded-2xl ">
                    <div>
                        <h1 className="text-3xl font-extrabold text-white">Create new post</h1>

                        <form action={action} className="mt-8 grid grid-cols-1  gap-1">
                            <div className="col-span-2 ">
                                <label htmlFor="topic" className={INPUT_LABEL_STYLE}>
                                    Topic
                                </label>
                                <Input type="topic" id="topic" name="topic" required />
                                {data.error?.topic && <div className="text-red-600">{data.error?.topic[0]}</div>}
                            </div>

                            <div className="col-span-2 ">
                                <label htmlFor="detail" className={INPUT_LABEL_STYLE}>
                                    Detail
                                </label>
                                <Input className="h-40" type="text" id="detail" name="detail" required />
                                {data.error?.detail && <div className="text-red-600">{data.error?.detail[0]}</div>}
                            </div>
                            <div className=" flex justify-end mt-2" >
                                {data.message ? <p>{data.message}</p> : <SubmitButton label="Add new post" />}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}