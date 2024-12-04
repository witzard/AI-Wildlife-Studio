import APODPost from "../api/APOD/apod";
export default function BlogPage() {
    return (
        <section className="bg-[url(https://th.bing.com/th/id/OIG4.Q8Bfua8NWu3HHOIO6x54?pid=ImgGn)] bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center py-4 ">
                <div className="mx-12 max-w-screen-xl w-full p-12 relative block bg-[#210535]/90 rounded-2xl ">
               
                    <APODPost />
                </div>
            </div>
        </section>);
}