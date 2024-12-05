import Image from "next/image";
import { Quicksand } from "next/font/google";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { getSession } from "@/utils/loginUser";
import Link from "next/link";
import Logout from "@/app/_component/Logout";


const quicksand = Quicksand({
    weight: "600",
    style: "normal",
    subsets: ["latin-ext"],
});

const MENU_TEXT_STYLE = "z-50 block px-4 py-2 text-sm text-gray-700"
const MENU_TEXT = "m-2 text-gray-500 ";

export default async function Header() {
    const user = await getSession()

    return (
        <header className="bg-[#210535]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-1">
                        <a className="block" href="/">
                            <Image width={30} height={30} src="/space.png" alt="logo"></Image>
                        </a>
                        <div className={`items-center ${quicksand.className}`}>
                            <a href="/" className="font-bold text-xs sm:text-3xl text-[#c874b2]">Cosmic Discovery</a>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <div className="text-xs text-[#c874b2] ">
                            {user ?
                                <div className="flex flex-row gap-4 items-center text-medium">{user.name}
                                    <div className="rounded-full bg-[#7b337d] p-2 text-white">
                                        <Link href="/newBlog" >
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                        </Link>
                                    </div>
                                </div>
                                :
                                <Link href="/auth/loginForm">Sign in?</Link>
                            }
                        </div>
                        <Menu as="div" className="flex items-center gap-4">
                            <div className="block">
                                <MenuButton className=" rounded-full bg-[#7b337d] p-2 text-white transition hover:text-[#210535]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </MenuButton>
                            </div>

                            <MenuItems transition className="z-50 absolute top-[5%] right-[5%] mt-2 w-52 rounded-md bg-white shadow-lg  ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                                <div className="py-1">
                                    <div className={MENU_TEXT_STYLE}>
                                        <MenuItem>
                                            <Link className={MENU_TEXT} href="/">Home</Link>
                                        </MenuItem>
                                    </div>
                                    <div className={MENU_TEXT_STYLE}>
                                        <MenuItem>
                                            <Link className={MENU_TEXT} href="/blog">Blog</Link>
                                        </MenuItem>
                                    </div>
                                    {user ?

                                        <div >
                                            <MenuItem>
                                                <div className={MENU_TEXT_STYLE}>
                                                    <Link className={MENU_TEXT} href="/APOD">APOD</Link>
                                                </div>
                                            </MenuItem>

                                            <MenuItem>
                                                <div className={MENU_TEXT_STYLE}>
                                                    <Logout />
                                                </div>
                                            </MenuItem>
                                        </div>
                                        :
                                        <div>
                                            <MenuItem>
                                                <div className={MENU_TEXT_STYLE}>
                                                    <Link className={MENU_TEXT} href="/auth/loginForm">Sign in</Link>
                                                </div>
                                            </MenuItem>
                                            <MenuItem>
                                                <div className={MENU_TEXT_STYLE}>
                                                    <Link className={MENU_TEXT} href="/auth/registerForm">Sign up</Link>
                                                </div>
                                            </MenuItem>
                                        </div>}
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>);
} 