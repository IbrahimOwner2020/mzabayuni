import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
    const [sideNav, setSideNav] = useState(false);

    return (
        <div className="max-w-7xl mx-auto bg-white py-6 px-4 flex items-center justify-between relative">
            <div className="flex justify-start items-center">
                <div className="w-6 h-6 rounded-full bg-orange mr-2"></div>
                <h2 className="text-black font-bold text-xl mr-5">Jeremiah</h2>
                <span>Portfolio</span>
            </div>
            <button className="sm:hidden z-30 focus:outline-none" onClick={() => setSideNav(!sideNav)}>
                <div className={`w-7 h-0.5 bg-black rounded duration-300 my-1.5 ${sideNav ? 'transform -rotate-45 duration-300 -mb-0.5' : ''}`}></div>
                <div className={`w-7 h-0.5 bg-black rounded my-1.5 ${sideNav ? 'hidden' : ''}`}></div>
                <div className={`w-7 h-0.5 bg-black rounded duration-300 my-1.5 ${sideNav ? 'transform rotate-45 duration-300 -mt-0.5' : ''}`}></div>
            </button>
            {sideNav ? (
                <div className="sm:hidden absolute top-0 left-0 w-screen h-screen bg-primary z-20">
                    <ul className={`absolute left-1/2 transition-all duration-300 transform -translate-x-1/2 ${sideNav ? 'top-1/4' : 'opacity-0'}`}>
                        <li className="my-6">
                            <Link href="/resume">
                                <span className="text-2xl text-black font-light px-6 py-6">Resume</span>
                            </Link>
                        </li>
                        <li className="my-6">
                            <Link href="/projects">
                                <span className="text-2xl text-black font-light px-6 py-6">Projects</span>
                            </Link>
                        </li>
                        <li className="my-6">
                            <Link href="/contacts">
                                <span className="text-2xl text-black font-light px-6 py-6">Contacts</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : null}
            <div className="hidden sm:block">
                <ul className="flex">
                    <li className="mx-1 border-r-2 border-black">
                        <Link href="/resume">
                            <span className="text-lg text-black px-2 font-light py-2">Resume</span>
                        </Link>
                    </li>
                    <li className="mx-1 border-r-2 border-black">
                        <Link href="/projects">
                            <span className="text-lg text-black px-2 font-light py-2">Projects</span>
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link href="/contacts">
                            <span className="text-lg text-black px-2 font-light py-2">Contacts</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;