import Image from "next/image";
import { Quicksand } from "next/font/google";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const quicksand = Quicksand({
    weight: "600",
    style: "normal",
    subsets: ["latin-ext"],
});

const menu_text = "m-2 text-gray-500 transition hover:text-gray-500/75";

export default function Header() {
    return (
        <header className="bg-[#210535]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-1">
                        <a className="block" href="/">
                            <Image width={30} height={30} src="/space.png" alt="logo"></Image>
                        </a>
                        <div className={quicksand.className}>
                            <a href="/" className="font-bold text-3xl text-[#c874b2]">Cosmic Discovery</a>
                        </div>
                    </div>



                    <Menu as="div" className="flex items-center gap-4">
                        <div className="block">
                            <MenuButton className=" rounded bg-[#7b337d] p-2 text-white transition hover:text-[#210535]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </MenuButton>
                        </div>

                        <MenuItems transition className="z-50 absolute top-10 right-10 mt-2 w-52  rounded-md bg-white shadow-lg  ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                            <div className="py-1">
                                <MenuItem>
                                    <div className="z-50 block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                        <a href="/" className={menu_text}>Home</a>
                                    </div>

                                </MenuItem>
                                <MenuItem>
                                    <div className="z-50 block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                                        <a href="/" className={menu_text}>Blog</a>
                                    </div>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>

                </div>
            </div>
        </header>);
} 