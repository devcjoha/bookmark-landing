"use client";
import Link from "next/link";
import BookmarkIcon from '@/components/icons/BookMarkIcon';
import ThemeToggle from "@/components/header/ThemeToggle";
import NewsLetterForm from "./NewsLetterForm";
import TwitterIcon from './icons/TwitterIcon';
import FacebookIcon from './icons/FacebookIcon';

const Footer = () => {

  const blueColor600 = "#5368df";
  const whiteColor = "#f7f7f7";

  return (
    <section className=" grid lg:grid-cols-[auto_480px_auto] lg:grid-rows-[200px_160px_100px] grid-rows-[170px_210px_400px] grid-cols-[fr] bg-blue-600 text-gray-50 w-screen h-auto">

      <div className="lg:col-start-2 row-1 col-1 flex flex-col items-center gap-6 justify-end text-center pl-8 pr-8">
        <h2 className="text-[.7rem] lg:text-[.8rem] uppercase tracking-[.3rem]">35,000+ already joined</h2>

        <h1 className="text-[1.5rem] lg:text-[2rem] font-medium text-gray-50">Stay up-to-date with what we’re doing</h1>

      </div>
      <div className="lg:col-start-2 row-2 col-1 items-center justify-center gap-5 p-8 lg:p-0">

        <NewsLetterForm />

      </div>
      <nav className="lg:col-span-3 col-1 row-3 flex gap-9 lg:flex-row flex-col items-center justify-center uppercase tracking-widest text-[1rem] bg-blue-950 text-gray-50 ">
        <div className="lg:w-1/2 flex gap-9 lg:flex-row flex-col items-center">
        <BookmarkIcon
          className={`bookmark-logo h-6 w-36 text-foreground`}
          textColor={whiteColor}
          circleColor={blueColor600}
          markColor={whiteColor}
          alt="logo"
        />
        <Link href="/" className="hover:text-red-400">Features</Link>
        <Link href="/" className="hover:text-red-400">Pricing</Link>
        <Link href="/" className="hover:text-red-400">Contact</Link>
        </div>
        <div className="icons-footer flex gap-10 items-center justify-center">
          <FacebookIcon className=" hover:text-red-400"/>
          <TwitterIcon className=" hover:text-red-400"/>
          <ThemeToggle />
        </div>
      </nav>
    </section>
  )
};
export default Footer;