import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="flex justify-between items-center bg-transparent m-auto pt-12 py-4">
                <footer className="text-white flex sm:flex-nowrap flex-wrap sm:justify-between justify-center">

                    <div className="p-5">
                        <p className="text-base text-white border-l-2">
                            <span className="ml-4 font-semibold">
                                Copyright (c) 2023 Kalash Vasaniya
                            </span>
                        </p>
                    </div>

                    <div className="p-5">
                        <p className="text-base text-white">
                            <button>
                                <span
                                    className="font-extrabold rounded-md bg-[#3f3fff] p-2 md:p-3 transition ease-linear delay-150 duration-300 hover:bg-[#1f1fff]">
                                    <a href="https://kalashvasaniya.com" target="_blank">
                                        Portfolio
                                    </a>
                                </span>
                            </button>
                        </p>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer
