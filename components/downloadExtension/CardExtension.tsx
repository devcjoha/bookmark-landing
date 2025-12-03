	"use client"
import Image, { StaticImageData } from "next/image";
import dottedLine from "@/public/bg-dots.svg";

interface CardExtensionProps {
  image: StaticImageData;
  name: string;
  version: string;
}
const CardExtension: React.FC<CardExtensionProps> = ({ image, name, version }) => {

  return (
    <div className="card-extension flex flex-col  items-center w-70 h-88 border border-transparent rounded-md bg-white shadow-md relative ">
      <Image
        src={image}
        alt={name}
        className="extension-image relative z-10 mt-5 mb-10
         w-auto h-auto"
        loading="eager"
      />
      <h1 className="extension-name text-[1.2rem] font-bold flex flex-col items-center mb-10 ">Add to {name} <span className="text-gray-400 text-[.9rem] font-light ">Minimum version {version}</span></h1>


      <Image src={dottedLine} className="dotted-image flex mb-7 w-full" loading="eager" alt="dotted-image"  height={10}></Image>
      <button className="hero-button tracking-wider rounded-md shadow-md font-medium text-gray-50 bg-blue-600 text-[.9rem] w-60 p-3 hover:bg-gray-50 hover:border-2 hover:border-blue-600 hover:text-blue-600 cursor-pointer">
        Add & Install Extension
      </button>
    </div>
  )
}
export default CardExtension;