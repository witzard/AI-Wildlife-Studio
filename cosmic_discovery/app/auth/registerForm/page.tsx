"use client"
import { Input } from "@/components/ui/inputField";
import { DatePicker } from "@nextui-org/react";
import { redirect } from "next/navigation"
import register from "../../_actions/register"
import { useActionState } from "react"
import SubmitButton from "@/app/_component/SubmitButton";
import Link from "next/link"


const INPUT_LABEL_STYLE = "block text-md font-medium text-gray-300";
export default function RegisterForm() {
    const [data, action] = useActionState(register, {})

    if (data.message) {
        redirect("/home")
    }

    return (
        <div className="bg-[url(https://th.bing.com/th/id/OIG4.Q8Bfua8NWu3HHOIO6x54?pid=ImgGn)] bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center px-8 py-8 ">
                <div className="max-w-xl p-12 relative block bg-[#210535]/90 rounded-2xl ">

                    <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        Sign up
                    </h1>
                    <p className="mt-4 leading-relaxed text-gray-300">
                        Create an account to start exploring the universe.
                    </p>

                    <form action={action} className="mt-8 grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                            <label htmlFor="email" className={INPUT_LABEL_STYLE}>
                                Email
                            </label>
                            <Input type="email" id="email" name="email" required />
                            {data.error?.email && <div className="text-red-600">{data.error?.email[0]}</div>}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="name" className={INPUT_LABEL_STYLE}>
                                Username
                            </label>
                            <Input type="text" id="name" name="name" required />
                            {data.error?.name && <div className="text-red-600">{data.error?.name[0]}</div>}
                        </div>


                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="password" className={INPUT_LABEL_STYLE}>
                                Password
                            </label>
                            <Input type="password" id="password" name="password" required />
                            {data.error?.password && <div className="text-red-600">{data.error?.password[0]}</div>}
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="dateOfBirth" className={INPUT_LABEL_STYLE}>
                                Birth date
                            </label>
                        
                                <DatePicker/>
                        </div>

                        <div>
                            {data.error?.message && <div className="text-red-600">{data.error?.message}</div>}
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">



                            <div className="">
                                {data.message ? <p>{data.message}</p> : <SubmitButton label="Create an account" />}
                            </div>

                            <p className="mt-4 text-sm text-gray-400 sm:mt-0 dark:text-gray-400">
                                Already have an account?{" "}
                                <Link href="/auth/loginForm" className="text-gray-300 underline dark:text-gray-200">
                                    Log in
                                </Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
}