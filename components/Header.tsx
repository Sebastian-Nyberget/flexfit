"use client";

import { useEffect, useState } from 'react';
import { Righteous } from "next/font/google";
import { FaBars } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const righteous = Righteous({
    subsets: ['latin'],
    weight: "400"
});

export default function Header() {
    const [activePage, setActivePage] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setActivePage(pathname);
    }, [pathname]);

    const getLinkClasses = (path: string) =>
        `text-black dark:text-white ${activePage === path ? 'text-pink-500 dark:text-pink-500 font-bold' : ''}`;

    return (
        <header className="w-full bg-white dark:bg-slate-900 flex items-center">
            <div className="py-4 px-20 w-full">
                <ul className="flex w-full justify-between items-center">
                    <li className="flex">
                        <GiWeightLiftingUp className="text-4xl text-black dark:text-white" />
                        <Link href="/" className={`${righteous.className} text-3xl font-bold text-black dark:text-white`}>FlexFit</Link>
                    </li>
                    <li className="hidden md:flex-grow md:flex md:justify-center md:gap-3">
                        <Link href="/" className={getLinkClasses('/')}>Hjem</Link>
                        <Link href="/om-oss" className={getLinkClasses('/om-oss')}>Om oss</Link>
                        <Link href="/medlemskap" className={getLinkClasses('/medlemskap')}>Medlemskap</Link>
                        <Link href="/booking" className={getLinkClasses('/booking')}>Booking</Link>
                    </li>
                    <li className="flex gap-5">
                        <ThemeToggle />
                        <div className="border-secondary border-2 px-4 py-2 rounded-2xl hover:bg-secondary hover:bg-opacity-40">
                            <h1 className="text-black cursor-pointer dark:text-white">Login</h1>
                        </div>
                    </li>
                    <li className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <FaBars className="text-3xl" color='black' />
                        </button>
                    </li>
                </ul>

                {menuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-2 bg-gray-100 p-4 rounded-lg">
                        <Link href="/" className={getLinkClasses('/')}>Hjem</Link>
                        <Link href="/om-oss" className={getLinkClasses('/om-oss')}>Om oss</Link>
                        <Link href="/medlemskap" className={getLinkClasses('/medlemskap')}>Medlemskap</Link>
                        <Link href="/booking" className={getLinkClasses('/booking')}>Booking</Link>
                    </div>
                )}
            </div>
        </header>
    );
}
