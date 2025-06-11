"use client"

import React, {useEffect} from 'react';
import Image from 'next/image';

import {LayoutGrid, Apple, Layout, ReceiptText} from 'lucide-react';

import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNav() {
    const menuList = [
        {
            id: 1,
            name: "Dashboard",
            icon: LayoutGrid,
            path: "/dashboard"
        },        {
            id: 2,
            name: "My day",
            icon: Apple,
            path: "/dashboard/my_day"
        },
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path)
    }, [path]);

    return (
        <div className="h-screen p-5 border shadow-sm">
            <div className="flex flex-row items-center">
                <Image src={"../health_logo.svg"} alt='logo' width={60} height={45}/>
                <span className='text-[#60bd91] font-bold text-xl'>WellnessSmart</span>
            </div>

            <div className="">
                {menuList.map((menu, index) => (
                    <Link
                    href={menu.path} key={index}
                    >
                        <h2 className={`flex gap-2 items-center text-gray-500 font-medium 
                                        mb-2 p-4 cursor-pointer rounded-full hover:text-primary 
                                        hover:bg-blue-100 ${path == menu.path && 'text-primary bg-blue-100'}`}>
                            <menu.icon/>
                            {menu.name}
                        </h2>
                    
                    </Link>
                ))}
            </div>
            <div className="fixed p-5 flex gap-2 items-center">
                <UserButton />
                Profile
            </div>
        </div>
    );
}


export default SideNav;