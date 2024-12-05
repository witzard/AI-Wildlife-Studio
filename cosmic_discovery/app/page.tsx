import Image from "next/image";
import { getSession } from "@/utils/loginUser";
import Link from "next/link";
export default async function Home() {
  const user = await getSession();
  return (

    <section className="relative bg-[url(https://th.bing.com/th/id/OIG4.Q8Bfua8NWu3HHOIO6x54?pid=ImgGn)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0  bg-transparent from-gray-900/95 to-gray-900/25 bg-gradient-to-r "></div>
      <div className="relative m-auto max-w-screen-xl px-4 py-32 sm:px-6  lg:flex h-screen lg:items-center lg:px-8">
        <div className="max-w-xl my-auto text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl text-[#630e5f] font-extrabold sm:text-5xl">
            Every star has a story,
            <strong className="block font-extrabold text-[#c874b0]"> and the universe is an endless library. </strong>
          </h1>

          <p className="mt-4 text-[#f5d5e0] max-w-lg sm:text-xl/relaxed">
            A website that provides real-time and engaging content about space exploration, planets, stars, and recent discoveries using NASA's APIs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            
            <Link
              href={user ? "home" :"/auth/registerForm" }
              className="block w-full rounded bg-[#7b337d] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#430d4b] focus:outline-none focus:ring active:bg-[#430d4b] sm:w-auto"
            >
              Get Started
            </Link>

            <a href="https://docs.google.com/document/d/1FN6uCB1dc5_h6EHpmwnJerfoEyW5UQ8KnbGgmSIpISw/edit?tab=t.0#heading=h.14mpx6a8znb7"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#7b337d]  shadow hover:text-[#c874b2] focus:outline-none focus:ring sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
