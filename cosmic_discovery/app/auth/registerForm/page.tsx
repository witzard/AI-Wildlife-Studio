"use client"
import React from "react";
import { Input } from "@/components/inputField";
import { DatePicker } from "@nextui-org/react";

const INPUT_LABEL_STYLE = "block text-md font-medium text-gray-300";
export default function RegisterForm() {
    return (
        <section className="bg-[url(https://th.bing.com/th/id/OIG4.Q8Bfua8NWu3HHOIO6x54?pid=ImgGn)] bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center px-8 py-8 ">
                <div className="max-w-xl p-12 relative block bg-[#210535]/90 rounded-2xl ">

                    <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        Sign up
                    </h1>
                    <p className="mt-4 leading-relaxed text-gray-300">
                        Create an account to start exploring the universe.
                    </p>

                    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                        <div className="col-span-6">
                            <label htmlFor="Email" className={INPUT_LABEL_STYLE}>
                                Email
                            </label>
                            <Input type="email" id="Email" name="email" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="FirstName" className={INPUT_LABEL_STYLE}>
                                Username
                            </label>
                            <Input type="text" id="FirstName" name="first_name" />
                        </div>


                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="Password" className={INPUT_LABEL_STYLE}>
                                Password
                            </label>
                            <Input type="password" id="Password" name="password" />
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="BirthDate" className={INPUT_LABEL_STYLE}>
                                Birth date
                            </label>
                            <DatePicker label=" " typeof="dabirthDatete" id="birthDate" name="birthDate" showMonthAndYearPickers />
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button className="inline-block shrink-0 rounded-md border border-[#67296d] bg-[#67296d] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[c874b2] focus:outline-none focus:ring active:text-[#c874b2] dark:hover:bg-[#c874b2] dark:hover:text-white" >
                                Create an account
                            </button>

                            <p className="mt-4 text-sm text-gray-400 sm:mt-0 dark:text-gray-400">
                                Already have an account?{" "}
                                <a href="/auth/loginForm" className="text-gray-300 underline dark:text-gray-200">
                                    Log in
                                </a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>);
}