const Hero = () =>{
  return(
    <section className="flex lg:flex-row flex-col w-full bg-amber-200">
    <article className="hero-article flex flex-col lg:order-1 order-2"> <h1>A Simple Bookmark Manager</h1>

  <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>

  <button>Get it on Chrome</button>
  <button>Get it on Firefox</button>
  </article>

  <div className="image-hero-background order-1 lg:order-2">
  <img src="bookmark-landing/images/illustration-hero.svg" alt="hero-image" />
  </div>
    </section>
  )
};
export default Hero;