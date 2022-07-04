import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    return(
        <div className="px-2 md:px-12 py-2 border-b border-blue-700 flex justify-between items-center sticky bg-white top-0 z-10">
            <div>
                <div className="hidden md:block">
                    <Link href="/" prefetch>
                        <span><Image src="/imags/Megrut_logo.png" alt="megrut restaurant" className="cursor-pointer" height={70} width={180} /></span>
                    </Link>
                    
                </div>
                <div className="md:hidden">
                    <Link href="/" prefetch>
                        <span><Image className="md:hidden" src="/imags/Megrut_logo.png" alt="megrut restaurant" height={60} width={140} /></span>
                    </Link>
                </div>
            </div>
            <div className="items-center border border-sky-600 px-8 lg:px-2 py-2 rounded-md hidden md:flex">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-900 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input type="text" placeholder="location" className="outline-none text-base text-black" />
                </div>
                <div className="h-6 w-[2px] bg-black mx-2"></div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-900 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Search Restaurant" className="outline-none text-base text-black"/>
                </div>
            </div>
            <div>
                <Link href="/admin" prefetch>
                    <button className="border border-sky-600 rounded-md py-3 px-8 transition-all duration-300 hover:bg-sky-600 hover:text-white">Add Restaurant</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;