"use client";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Header() {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll position
      setHeaderActive(window.scrollY > 50);
    };
    // add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // remove scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/img/logo.png"
            width={117}
            height={55}
            alt="Logo"
          />
        </Link>
        {/* Mobile Nav - hidden on desktop */}
        <MobileNav
          containerStyles={`
        ${headerActive ? "top-[90px]" : "top-[124px]"} 
        ${
          openNav
            ? "max-h-max pt-8 pb-10 border-t border-white/10"
            : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
        }
        flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 text-base font-medium uppercase text-white transition-all xl:hidden`}
        />
        {/* Desktop Nav - hidden on small devices */}
        <Nav containerStyles="text-white gap-4 uppercase text-base font-medium transition-all hidden xl:flex" />
        {/* hide/open menu button */}
        <div className="flex items-center gap-4">
          {/* Login and Register buttons */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base uppercase font-medium">Login</button>
            <button className="hover:text-accent transition-all text-base uppercase font-medium">Register</button>
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
