"use client";
import { Suspense, useState } from "react";
import FaqIcon from "../icons/FaqIcon";

type FaqItem = {
  key: string;
  question: string;
  answer: string;
};
const infoFaq = [
  {
    key: "faq1",
    question: "What is Bookmark?",
    answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt   justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    key: "faq2",
    question: "How can I request a new browser?",
    answer: "  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    key: "faq3",
    question: "Is there a mobile app?",
    answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    key: "faq4",
    question: "  What about other Chromium browsers?",
    answer: "  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  }
]
const Faq = () => {
  const [faqState, setFaqState] = useState<string | null>(null);

  const toggleFaq = (key: string) => {
    setFaqState(prev => (prev === key ? null : key));
  };

  return (
    <section
      className="grid lg:grid-cols-[auto_550px_auto] lg:grid-rows-[230px_600px_100px] grid-cols-[fr] w-screen p-9">
      <div
        className="col-start-2 row-1 flex flex-col justify-end items-center text-center h-60">
        <h1
          className="font-medium lg:text-[2rem] text-[1.5rem] lg:mb-9 mb-5 leading-8"
        >Frequently Asked Questions</h1>
        <p
          className=" text-gray-400 tracking-wide w-full
          leading-6 lg:text-[1.1rem] 
          text-[.9rem] "
        >Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>
      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        <nav className="col-start-2 row-2 pt-14">
          <ul className="h-auto">
            {infoFaq.map(({ key, question, answer }) => {
              const isOpen = faqState === key;
              const panelId = `${key}-panel`;

              return (
                <li key={key}
                  className=" lg:border-t border-t border-gray-200 lg:first:border-t first:border-t-0 last:border-b  lg:pr-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(key)}
                    className="flex w-full items-center justify-between py-5 cursor-pointer h-auto "
                  >
                    <span className={"text-foreground hover:text-red-400 text-[14.5px] lg:text-[1.1rem] "}>{question}</span>
                    <FaqIcon
                      alt={"icon-faq"}
                      className={`transition-transform duration-300 ${isOpen ? "text-red-400 rotate-180" : "text-blue-600 rotate-0"}`}
                    />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <p className="py-2 text-gray-500 lg:text-[1.1rem] 
                    text-[14.5px] lg:leading-9 leading-7 mb-5"
                    >{answer}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
          <div className="lg:col-start-2 flex items-center h-40 justify-center">
            <button type="button" name="Chrome" className="faq-button bg-blue-600 rounded-md shadow-md font-medium text-grey-50 lg:text-[.9rem] text-[13px]
          w-30  p-3  py-4
          ">More Info</button>
          </div>
      </Suspense>
    </section>
  )
};
export default Faq;