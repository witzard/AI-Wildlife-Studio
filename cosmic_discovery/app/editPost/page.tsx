"use client"
import { Input } from "@/components/ui/inputField";
import { useActionState } from "react";
import SubmitButton from "../_component/SubmitButton";
import { redirect } from "next/navigation"
import Link from "next/link";
import updatePost from "..//_actions/updatePost";
import { useState } from "react";
import { useEffect } from "react";

const INPUT_LABEL_STYLE = "block text-md font-medium text-gray-300";
export default function EditBlog({ searchParams }:
    { searchParams: { [key: string]: string } }) {

    const { id, topic, detail } = searchParams;
    const [data, action] = useActionState(updatePost, {});
    const [formData, setFormData] = useState({ topic, detail });


    useEffect(() => {
        setFormData({
            topic: searchParams.topic || "",
            detail: searchParams.detail || "",
        });
    }, [searchParams]);

    if (data.message) {
        redirect("/blog")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <section className="bg-[url(https://th.bing.com/th/id/OIG4.Q8Bfua8NWu3HHOIO6x54?pid=ImgGn)] bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center py-4 ">
                <div className=" sm:mx-16 w-full max-w-screen-xl p-4 sm:p-16 relative block bg-[#210535]/90 rounded-2xl ">
                    <div>
                        <h1 className="text-3xl font-extrabold text-white">Edit post</h1>
                        <form action={action} className="mt-8 grid grid-cols-1  gap-1">
                            <div className="col-span-2 ">
                                <label htmlFor="topic" className={INPUT_LABEL_STYLE}>
                                    Topic
                                </label>
                                <Input value={formData.topic} onChange={handleChange} type="topic" id="topic" name="topic" />
                                {data.error?.topic && <div className="text-red-600">{data.error?.topic[0]}</div>}
                            </div>

                            <div className="col-span-2 ">
                                <label htmlFor="detail" className={INPUT_LABEL_STYLE}>
                                    Detail
                                </label>
                                <Input className="h-52" value={formData.detail} onChange={handleChange} isTextArea type="text" id="detail" name="detail"  />
                                {data.error?.detail && <div className="text-red-600">{data.error?.detail[0]}</div>}
                            </div>

                            <div><input type="hidden" name="id" id="id" value={id} /></div>

                            <div className=" flex justify-end mt-2" >
                                <Link className="mr-2 inline-block shrink-0 rounded-md border border-[#67296d] bg-[#67296d] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[c874b2] focus:outline-none focus:ring active:text-[#c874b2] dark:hover:bg-[#c874b2] dark:hover:text-white" href="/blog">Back</Link>
                                {data.message ? <p>{data.message}</p> : <SubmitButton label="Update post"/>}
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}