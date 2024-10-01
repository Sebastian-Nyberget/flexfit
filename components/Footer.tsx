import { Righteous } from "next/font/google";
import Link from "next/link";
import { GiWeightLiftingUp } from "react-icons/gi";

const righteous = Righteous({
    subsets: ['latin'],
    weight: "400",
});

const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-slate-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <GiWeightLiftingUp className="text-black dark:text-white text-4xl" />
                        <span className={`${righteous.className} self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white`}>
                            FlexFit
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Hjem</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 <Link href="/" className="hover:underline">FlexFit</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;