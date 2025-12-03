import Image, { StaticImageData } from "next/image";

interface TabCardProps {
  image: StaticImageData; 
  title: string;
  text: string;
}
const TabCard: React.FC<TabCardProps> = ({image, title, text}) => {
  return (
    <section className="tabs-section grid w-full items-center 
   lg:grid-cols-[750px_auto] lg:grid-rows-1 h-[550px]
    grid-cols-1 grid-rows-[300px_200px]">


      <article className="tabs-article flex flex-col justify-center lg:gap-7 lg:col-start-2 lg:row-1 lg:pr-50
      row-2 col-1 gap-5 p-8">

        <h1 className="tabs-title font-medium text-foreground
        lg:text-[2rem] lg:text-left lg:leading-13 
        text-[1.5rem] text-center
        ">{title}</h1>

        <p className="tabs-text text-gray-400 text-center tracking-wide lg:leading-7 leading-6
        lg:text-left lg:text-[1.1rem] lg:p-0
        text-[.9rem] ">{text}</p>

        <div className="button-tab-container gap-5 justify-center lg:justify-start lg:block hidden">
          <button type="button" name="Chrome" className="hero-button bg-blue-600 rounded-md shadow-md font-medium text-grey-50 lg:text-[.9rem] text-[13px]
          lg:w-30 w-25 p-3 h-12 hover:bg-gray-50 hover:border-2 hover:border-blue-600 hover:text-blue-600 cursor-pointer 
          ">More Info</button>

        </div>

      </article>


      <div className="image-tabs-container relative flex justify-center 
      lg:items-center lg:col-start-1 lg:row-1 lg:w-180 lg-h-full
      row-start-1 col-1 w-full ">

        <div className="tabs-background absolute bg-blue-600 left-0 z-0 rounded-l-full  transform scale-x-[-1]
        lg:h-88 lg:w-133 lg:top-20
        h-45 w-75 top-15 
        "></div>
        <Image
          src={image}
          alt={title}
          className="tabs-image relative z-10 
          lg:w-120 lg:h-85
          w-78 h-50"
          loading="eager"
        />
      </div>

    </section>
  )
};
export default TabCard;