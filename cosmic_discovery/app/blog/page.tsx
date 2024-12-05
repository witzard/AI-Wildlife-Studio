import prisma from "@/utils/db"
import { getSession } from "@/utils/loginUser";
import LikeButton from "../_component/LikeButton";
import { likePost, unlikePost } from "../_actions/likePost";

import DeleteButton from "../_component/DeleteButton";
import deletePost from "../_actions/deletePost";

import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const MENU_TEXT_STYLE = "z-50 block px-4 py-2 text-sm text-gray-700"
const MENU_TEXT = "m-2 text-gray-500 ";

export default async function BlogPage() {
    const posts = await prisma.post.findMany({
        include: {
            user: true,
        }
    })
    const user = await getSession();

    return (
        <section className="bg-[url(https://th.bing.com/th/id/OIG4.Q8Bfua8NWu3HHOIO6x54?pid=ImgGn)] bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center py-4 ">
                <div className=" sm:mx-16 w-full max-w-screen-xl p-4 sm:p-16 relative block bg-[#210535]/90 rounded-2xl ">
                    {posts.map((post) => (
                        <div key={post.id} className="p-2 sm:p-4 lg:p-6 mx-auto max-w-screen-sm m-3 rounded-xl border-2  bg-white">
                            <div className="flex justify-between">
                                <div className="flex items-center sm:gap-2">
                                    <div className="text-xs sm:text-gray-500">
                                        <p className="font-medium underline hover:text-gray-700"> {post.user.name} </p>
                                    </div>
                                    <span className="block"> &middot; </span>
                                    <div className="flex items-center gap-1 text-gray-500">
                                        <p className="text-xs"> {post.createdAt.toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Menu as="div" className="flex items-center gap-4">
                                        <div className="block">
                                            <MenuButton className=" rounded-full p-2 text-white transition hover:text-[#210535]">
                                                <svg width={15} height={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z" stroke="#7a7a7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#7a7a7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z" stroke="#7a7a7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                            </MenuButton>
                                        </div>

                                        <MenuItems transition className="z-50 absolute right-[10%] w-[20%] origin-top-right rounded-md bg-gray-200 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                                            <div className="py-1">
                                                {user && user.name == post.user.name ?
                                                    <>
                                                        <div className={` ${MENU_TEXT_STYLE}`}>
                                                            <MenuItem>
                                                                <Link href={{
                                                                    pathname: '/blog/edit',
                                                                    query: { id: post.id, subject: post.topic, detail: post.detail }
                                                                }}
                                                                    className={MENU_TEXT}>Edit</Link>

                                                            </MenuItem>
                                                        </div>

                                                        <div className={` ${MENU_TEXT_STYLE}`}>
                                                            <div className={MENU_TEXT} >
                                                                <MenuItem >
                                                                    <DeleteButton id={post.id} deletePost={deletePost} />
                                                                </MenuItem>
                                                                {post.id}
                                                            </div>

                                                        </div>
                                                    </> : ""}

                                                <div className={MENU_TEXT_STYLE}>
                                                    <MenuItem>
                                                        <Link className={MENU_TEXT} href="/">Hide post</Link>
                                                    </MenuItem>
                                                </div>
                                            </div>

                                        </MenuItems>
                                    </Menu>

                                </div>
                            </div>
                            <hr className="my-2" />
                            <div className="flex flex-col items-start ">
                                <h3 className="font-medium sm:text-lg">
                                    {post.topic}
                                </h3>
                                <p className="text-sm text-gray-700">{post.detail}</p>
                            </div>
                            <hr className="my-2" />
                            <div className=" text-lg sm:text-xs">
                                <LikeButton id={post.id} likePost={likePost} unlikePost={unlikePost} /> {post.like}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>);
}