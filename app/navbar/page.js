import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className="bg-black fixed w-full z-20 top-0 left-0 border-b">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/blog" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-700 hover:text-blue-600">Blogs</span>
                    </Link>
                    <div className="flex md:order-2">
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden bg-black ring ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
                            <li>
                                <Link href="/home" className="block py-2 pl-3 pr-4 rounded text-gray-400 hover:text-white focus:text-white md:p-0" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="block py-2 pl-3 pr-4 rounded text-gray-400 hover:text-white md:p-0">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="block py-2 pl-3 pr-4 rounded text-gray-400 hover:text-white md:p-0">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
