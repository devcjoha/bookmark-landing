"use client";
import { Suspense, useState } from "react";
import imgBookmarking from "@/public/illustration-features-tab-1.svg";
import imgSearching from "@/public/illustration-features-tab-2.svg";
import imgSharing from "@/public/illustration-features-tab-3.svg";
import TabButton from "./TabButton"
import TabCard from "../features/TabCard";

const tabInfo = {
  bookmarking: {
    img: imgBookmarking,
    title: "Bookmark in one click",
    text: "  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
  },
  searching: {
    img: imgSearching,
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
  },
  sharing: {
    img: imgSharing,
    title: "Share your bookmarks",
    text: " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
  }
}
const Features = () => {
  const [tab, setTab] = useState<keyof typeof tabInfo>("bookmarking");

  return (
    <section className="features-section flex flex-col items-center w-screen h-auto">
      <div className="features-header flex flex-col items-center text-center pt-25 lg:pb-15 pb-10">
        <h1 className="features-title font-medium lg:text-[2rem] text-[1.5rem] lg:mb-5 mb-3">Features</h1>
        <p className="features-text flex flex-col items-center text-center leading-6 text-gray-400 tracking-wide lg:w-140 w-80
        lg:leading-7 lg:text-[1.1rem] 
        text-[.9rem] 
        ">Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        <nav className="features-nav flex lg:flex-row flex-col w-screen items-center justify-center lg:h-15.5 h-50 lg:border-b lg:border-gray-200 lg:w-180 ">
          <TabButton
            isActive={tab === "bookmarking"}
            action={() => setTab("bookmarking")}
          >
            Simple Bookmarking
          </TabButton>
          <TabButton
            isActive={tab === "searching"}
            action={() => setTab("searching")}
          >

            Speedy Searching

          </TabButton>
          <TabButton
            isActive={tab === "sharing"}
            action={() => setTab("sharing")}
          >

            Easy Sharing
          </TabButton>
          <hr />
        </nav>
        <TabCard
          image={tabInfo[tab].img}
          title={tabInfo[tab].title}
          text={tabInfo[tab].text}
        />
      </Suspense>
    </section>
  )
};
export default Features;