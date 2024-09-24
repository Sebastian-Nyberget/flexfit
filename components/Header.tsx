import { Righteous } from "next/font/google";
import Link from 'next/link'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const righteous = Righteous({
    subsets: ['latin'],
    weight: "400"
});

const Header = () => {
    return (
        <header className="w-full bg-white flex items-center">
            <div className="py-4 px-20 w-full">
                <ul className="flex w-full justify-between items-center">
                    <li>
                        <Link href="/" className={`${righteous.className} text-3xl font-bold text-black`}>FlexFit</Link>
                    </li>   
                    <li className="flex gap-3">
                        <Link href="/" className="text-black">Hjem</Link>
                        <Link href="/" className="text-black">Om oss</Link>
                        <Link href="/" className="text-black">Medlemskap</Link>
                        <Link href="/" className="text-black">Booking</Link>
                    </li>
                    <li>
                        <SignedOut>
                            <SignInButton mode="modal" signUpFallbackRedirectUrl="/"><h1 className="text-black cursor-pointer outline-1 outline-">Login</h1></SignInButton>
                        </SignedOut>
                    </li>
                 </ul>
            </div>
        </header>
    );
}
 
export default Header;