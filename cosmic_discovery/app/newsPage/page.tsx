"use client"
import { useEffect, useState } from "react";

interface Article {
    id: number;
    title: string;
    summary: string;
    url: string;
    image_url: string;
    published_at: string;
}

export default function NewsFeed() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/");
                const data = await response.json();
                setArticles(data.results);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        }

        fetchNews();
    }, []);

    return (
        <div className="bg-[url(https://th.bing.com/th/id/OIG4.Q8Bfua8NWu3HHOIO6x54?pid=ImgGn)] bg-cover bg-center bg-no-repeat">
            <div className="flex items-center justify-center py-4 ">
                <div className=" p-5 sm:p-10 lg:p-15 m-auto max-w-screen-md sm:mx-16 w-full relative block bg-[#210535]/90 rounded-2xl ">
                    <h1 className="mb-4 text-medium md:text-2xl font-bold text-white">Space News Feed</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {articles.map((article) => (
                            <a
                                key={article.id}
                                href={article.url}
                                className="bg-white block border p-4 rounded-md shadow-md hover:shadow-lg transition"
                            >
                                <img
                                    src={article.image_url}
                                    alt={article.title}
                                    className="h-40 w-full object-cover rounded-md"
                                />
                                <h2 className="mt-2 text-lg font-semibold">{article.title}</h2>
                                <p className="text-sm text-gray-500">{article.summary}</p>
                                <p className="text-xs text-gray-400 mt-2">Published on: {new Date(article.published_at).toLocaleDateString()}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}