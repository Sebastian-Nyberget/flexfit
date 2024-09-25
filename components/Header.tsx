"use client";

import { useState } from 'react';
import { Righteous } from "next/font/google";
import { GoSun } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import {
    ClerkLoaded,
    ClerkLoading,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs';

const righteous = Righteous({
    subsets: ['latin'],
    weight: "400"
});

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white flex items-center">
            <div className="py-4 px-20 w-full">
                <ul className="flex w-full justify-between items-center">
                    <li className="flex">
                        <Image src="/flexfit.svg" alt="" width={25} height={25} />
                        <Link href="/" className={`${righteous.className} text-3xl font-bold text-black`}>FlexFit</Link>
                    </li>
                    <li className="hidden md:flex-grow md:flex md:justify-center md:gap-3">
                        <Link href="/" className="text-black">Hjem</Link>
                        <Link href="/om-oss" className="text-black">Om oss</Link>
                        <Link href="/medlemskap" className="text-black">Medlemskap</Link>
                        <Link href="/booking" className="text-black">Booking</Link>
                    </li>
                    <li className="flex gap-5">
                        <div className="items-center justify-center flex w-10 border-2 border-gray-200 rounded-xl hover:bg-gray-200 hover:bg-opacity-40">
                            <GoSun color="black" className="text-2xl" />
                        </div>
                        <ClerkLoading>
                            loading...
                        </ClerkLoading>
                        <ClerkLoaded>
                        </ClerkLoaded>
                        <SignedOut>
                            <SignInButton mode="modal" signUpFallbackRedirectUrl="/">
                                <div className="border-secondary border-2 px-4 py-2 rounded-2xl hover:bg-secondary hover:bg-opacity-40">
                                    <h1 className="text-black cursor-pointer">Login</h1>
                                </div>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </li>
                    <li className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <FaBars className="text-3xl" color='black' />
                        </button>
                    </li>
                </ul>

                {menuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-2 bg-gray-100 p-4 rounded-lg">
                        <Link href="/" className="text-black">Hjem</Link>
                        <Link href="/om-oss" className="text-black">Om oss</Link>
                        <Link href="/medlemskap" className="text-black">Medlemskap</Link>
                        <Link href="/booking" className="text-black">Booking</Link>
                    </div>
                )}
            </div>
        </header>
    );
}
