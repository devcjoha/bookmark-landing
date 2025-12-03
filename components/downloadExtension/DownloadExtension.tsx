import imgChrome from "@/public/logo-chrome.svg";
import imgFirefox from "@/public/logo-firefox.svg";
import imgOpera from "@/public/logo-opera.svg";
import CardExtension from "./CardExtension";
import { log } from "util";
const DownloadExtension = () => {
  const extensionInfo = {
    chrome: {
      image: imgChrome,
      name: "Chrome",
      version: "62"
    },
    firefox: {
      image: imgFirefox,
      name: "firefox",
      version: "55"
    },
    opera: {
      image: imgOpera,
      name: "opera",
      version: "46"
    }
  };

  return (
    <section className="extension-section grid h-auto
    lg:grid-col-3 lg:grid-rows-[200px_500px] 
    grid-col-1 grid-rows-[200px_390px_390px_390px] lg:ml-50 lg:mr-50 
    ">
      <article className="extension-header row-1 lg:col-span-3 col-1 h-50 flex flex-col justify-center items-center">
        <h1 className="extension-title font-medium lg:text-[2rem] text-[1.5rem] lg:mb-5 mb-3 ">Download the extension</h1>

        <p className="extension-text flex flex-col items-center text-center leading-6 text-gray-400 tracking-wide lg:w-140 w-80
        lg:leading-7 lg:text-[1.1rem] 
        text-[.9rem]">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      </article>

      <article className="col-chrome lg:row-2 col-1 row-2 flex lg:justify-end lg:items-start items-center justify-center ">
        <CardExtension
          image={extensionInfo.chrome.image}
          name={extensionInfo.chrome.name}
          version={extensionInfo.chrome.version}
        />
      </article>
      <article className="col-firefox lg:row-2 lg:col-2 col-1 row-3 flex items-center justify-center">
        <CardExtension
          image={extensionInfo.firefox.image}
          name={extensionInfo.firefox.name}
          version={extensionInfo.firefox.version}
        />
      </article>
      <article className="col-opera lg:row-2 lg:col-3 col-1 row-4 flex lg:items-end lg:justify-start items-center justify-center">
        <CardExtension
          image={extensionInfo.opera.image}
          name={extensionInfo.opera.name}
          version={extensionInfo.opera.version}
        />
      </article>
    </section>
  )
};
export default DownloadExtension;