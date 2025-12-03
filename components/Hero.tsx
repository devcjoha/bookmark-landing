import Image from 'next/image';
import imageHero from "@/public/illustration-hero.svg"

const Hero = () => {
  return (
    <section className="hero-section grid w-full items-center 
   lg:grid-cols-[fr_600px] lg:grid-rows-1 lg:h-[550px] lg:pl-25
    grid-cols-1 grid-rows-[270px_355px] h-auto ">


      <article className="hero-article flex flex-col justify-center h-full lg:gap-7 lg:col-start-1 lg:row-start-1 lg:pr-30 lg:p-0
      row-start-2 col-start-1 gap-5 p-8">

        <h1 className="hero-title font-medium text-foreground
        lg:text-[3rem] lg:text-left lg:leading-13 
        text-[1.9rem] text-center
        ">A Simple Bookmark Manager</h1>

        <p className="hero-text text-gray-400 text-center tracking-wide lg:leading-7 leading-6
        lg:text-left lg:text-[1.1rem] lg:p-0
        text-[.9rem] ">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>

        <div className="buttons-container flex gap-5 justify-center lg:justify-start lg:mt-0 mt-5">
          <button type="button" name="Chrome" className="hero-button bg-blue-600 tracking-wider rounded-md shadow-md font-medium text-grey-50 lg:text-[.8rem] text-[13px] h-12
          lg:w-42 w-38 hover:bg-gray-50 hover:border-2 hover:border-blue-600 hover:text-blue-600 cursor-pointer
          ">Get it on Chrome</button>
          <button type="button" name="firefox" className="hero-button tracking-wider rounded-md shadow-md font-medium text-gray-500 bg-grey-50 lg:text-[.9rem]  
          lg:w-42 lg:p-3 p-3 w-38 text-[13px] h-12
          hover:border-2 hover:border-gray-400  cursor-pointer
          ">Get it on Firefox</button>
        </div>

      </article>


      <div className="image-hero-container relative flex justify-center lg:col-start-2 lg:row-start-1 lg:w-180 
      row-start-1 col-start-1 w-full h-auto">

        <div className="hero-background absolute bg-blue-600 right-0 z-0 rounded-l-full
        lg:h-88 lg:min-w-147 lg:top-36
        h-50 w-76 top-15
        "></div>
        <Image
          src={imageHero}
          alt="hero-image"
          className="hero-image relative z-10 right-0
          lg:w-auto lg:pr-15 
          w-88 h-auto "
          loading="eager"
        />
      </div>

    </section>
  )
};
export default Hero;