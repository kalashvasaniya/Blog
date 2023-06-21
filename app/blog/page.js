'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'


export const blog = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/api/blogs`).then((a) => {
            return a.json()
        }).then((parsed) => {
            setBlog(parsed)
        })
    }, [])

    return (
        <>
            <div className="flex flex-col items-center pt-32 bg-black">
                <h1 className="text-3xl font-bold underline underline-offset-4 decoration-blue-600 text-white">Kalash Vasaniya</h1>
            </div>
            <div className="flex justify-center text-center items-center bg-black">
                <p className="text-lg mt-3 text-white">Read My latest Blog...
                    <br />Just click on <span className='text-blue-600 underline underline-offset-2'>Show more</span> to see!</p>
            </div>

            <section className="text-gray-600 body-font pt-12 md:pt-20 bg-black pb-32">
                <div className="px-5 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">

                            {blog.map((blogitem) => {
                                return <div key={blogitem.slug} className="bg-gray-300 bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">{blogitem.date}</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{blogitem.title}</h1>
                                    <p className="leading-relaxed mb-3 text-gray-800">{blogitem.content.substr(0, 80)}...</p>
                                    <Link href={`/blogpost/${blogitem.slug}`} className="text-blue-700 hover:text-blue-600 inline-flex items-center">Show More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default blog
