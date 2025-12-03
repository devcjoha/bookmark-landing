"use client";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/header/ThemeToggle";
import BookmarkIcon from '@/components/icons/BookMarkIcon';
import iconClose from "@/public/icon-close.svg";
import iconHamburger from "@/public/icon-hamburger.svg";
import iconFacebook from "@/public/icon-facebook.svg";
import iconTwitter from "@/public/icon-twitter.svg";
import HamburguerIcon from '../icons/HamburgueIcon';


function Header() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };
  const themeColor = theme === "light" ? "#252b46" : "#ffffff"
  const blueColor950 = "#252b46";
  const blueColor600 = "#5368df";
  const whiteColor = "#f7f7f7";

  return (
    <header className="flex items-center justify-between bg-background text-foreground p-10 mb-10 lg:pl-25 lg:pr-25">
      <div className="flex items-center gap-2">
        <BookmarkIcon
          className={!isOpen ? `bookmark-logo h-6 w-36 text-foreground` : "bookmark-logo hidden"}
          textColor={themeColor}
          circleColor={blueColor600}
          markColor={whiteColor}
        />
      </div>
      {/* NAV desktop */}
      <nav className="lg:flex gap-9 hidden text-foreground flex-row items-center uppercase tracking-widest text-[.8rem]">
        <Link href="/features" className="hover:text-red-400">Features</Link>
        <Link href="/pricing" className="hover:text-red-400">Pricing</Link>
        <Link href="/faq" className="hover:text-red-400">FAQ</Link>
        <Link href="/contact" className="hover:text-red-400">Contact</Link>
        <button className="w-25 h-10 bg-red-400 rounded-md text-white uppercase tracking-widest text-[.8rem] shadow-md hover:bg-gray-50 hover:text-red-400 hover:border-2 hover:border-red-400 hover:font-medium cursor-pointer">
          Login
        </button>
        <ThemeToggle />
      </nav>
      {/* HAMBURGER Button */}
      <button
        data-collapse-toggle="navbar-hamburger"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
        className={isOpen ? "button-hamburger hidden" : `button-hamburger lg:hidden flex items-center justify-center`}
        type="button"
        onClick={handleSideBar}
      >
        <HamburguerIcon 
        className={theme === "dark" ? `iconHamburguer text-gray-50` : "iconHamburguer text-gray-950"} 
        alt="icon-hamburger" />

      </button>

      {/* SIDEBAR mobile */}
      <nav
        id="navbar-hamburger"
        className={`nav-mobile lg:hidden fixed h-full w-screen top-0 left-0 z-50
      ${isOpen
            ? "translate-x-0"
            : "translate-x-full opacity-0 pointer-events-none "
          }
        transition-all duration-200 ease-in-out`}
      >
        <div
          className="navbar-container w-screen h-full flex flex-col items-center justifz-center gap-6 p-8 shadow-xl z-50  bg-Sidebar/93  text-white uppercase"
        >
          {/* LOGO */}
          <div className="flex flex-row w-full items-center justify-between gap-2 ">
            <div className="flex items-center gap-2">
              <BookmarkIcon
                className={`h-6 w-36 text-foreground`}
                textColor={whiteColor}
                circleColor={whiteColor}
                markColor={blueColor950}
              />
            </div>
            {/* icon-close*/}
            <Image src={iconClose}
              alt="icon-close"
              className={isOpen ? `icon-close h-3 w-auto text-foreground` : ""}
              onClick={handleSideBar} />
          </div>
          <ThemeToggle />
          <ul className="font-light h-full w-full items-center justify-center text-center text-[1.2rem] tracking-widest">
            <li className="li-menu-sidebar border-b border-t border-grey-50/20 pt-5 pb-5 mt-5"><Link href="/features" onClick={() => setIsOpen(false)}>Features</Link></li>
            <li className="li-menu-sidebar border-b border-grey-50/20 pt-5 pb-5"><Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
            <li className="li-menu-sidebar border-b border-grey-50/20 pt-5 pb-5"><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <button className="w-full h-10 rounded-md text-white uppercase tracking-widest text-[1.4rem] font-normal border-2 border-grey-50 mt-6">
              Login
            </button>
          </ul>
          <div className="icons-sidebar flex w-full h-full gap-10 items-center justify-center">
            <Image src={iconFacebook} alt="icon" className="w h-auto" />
            <Image src={iconTwitter} alt="icon" className="w h-auto" />
          </div>
        </div>
      </nav>

    </header>
  );
}
export default Header;