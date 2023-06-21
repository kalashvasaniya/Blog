'use client'
import { useEffect, useState } from 'react';

const slug = ({ params }) => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`http://localhost:3000/api/getblog?slug=${params.slug}`);
            const data = await response.json();
            setBlog(data);
        }

        fetchBlog();
    }, []);

    return (
        <>
            <div className="bg-black">
                <div className="pt-40 flex flex-col items-center justify-center pb-40 max-w-4xl m-auto bg-black">
                    <h1 className="text-3xl font-bold underline underline-offset-8 text-white">
                        {blog?.slug}
                    </h1>
                    <p className="text-xl pt-8 px-8 text-left text-white">
                        {blog?.content}
                    </p>
                </div>
            </div>
        </>
    )
}

export default slug;
