"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Righteous } from "next/font/google";
import { FaBars } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton } from "@/features/auth/components/user-button";
import { getCurrent } from "@/features/auth/actions";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [activePage, setActivePage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [SignedIn, setSignedIn] = useState(false); // Manage sign-in state

  const SignedPath = pathname === "/sign-in";

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const currentUser = await getCurrent(); // Fetch current user
      if (currentUser) {
        setSignedIn(true); // Set signed-in state if user is available
      } else {
        setSignedIn(false);
      }
    };
    fetchCurrentUser();
  }, []);

  const getLinkClasses = (path: string) =>
    `text-black dark:text-white ${
      activePage === path ? "text-pink-500 dark:text-pink-500 font-bold" : ""
    }`;

  return (
    <header className="w-full bg-white dark:bg-slate-900 flex items-center">
      <div className="py-4 px-20 w-full">
        <ul className="flex w-full justify-between items-center">
          <li className="flex">
            <GiWeightLiftingUp className="text-4xl text-black dark:text-white" />
            <Link
              href="/"
              className={`${righteous.className} text-3xl font-bold text-black dark:text-white`}
            >
              FlexFit
            </Link>
          </li>
          <li className="hidden md:flex-grow md:flex md:justify-center md:gap-3">
            <Link href="/" className={getLinkClasses("/")}>
              Hjem
            </Link>
            <Link href="/om-oss" className={getLinkClasses("/om-oss")}>
              Om oss
            </Link>
            <Link
              href="/medlemskap"
              className={getLinkClasses("/medlemskap")}
            >
              Medlemskap
            </Link>
            <Link href="/booking" className={getLinkClasses("/booking")}>
              Booking
            </Link>
          </li>
          <li className="flex gap-5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  {theme === "dark" ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {SignedIn ? (
              <UserButton />
            ) : (
              <Button asChild variant="secondary">
                <Link href={SignedPath ? "/sign-up" : "/sign-in"}>
                  {SignedPath ? "Registrer deg" : "Login"}
                </Link>
              </Button>
            )}
          </li>
          <li className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars className="text-3xl" color="black" />
            </button>
          </li>
        </ul>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2 bg-gray-100 p-4 rounded-lg">
            <Link href="/" className={getLinkClasses("/")}>
              Hjem
            </Link>
            <Link href="/om-oss" className={getLinkClasses("/om-oss")}>
              Om oss
            </Link>
            <Link
              href="/medlemskap"
              className={getLinkClasses("/medlemskap")}
            >
              Medlemskap
            </Link>
            <Link href="/booking" className={getLinkClasses("/booking")}>
              Booking
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
