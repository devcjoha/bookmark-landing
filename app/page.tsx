import Hero from "@/components/Hero";
import Header from "@/components/header/Header";
import Features from "@/components/features/Features";
import DownloadExtension from "@/components/downloadExtension/DownloadExtension";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/Footer";

export default function Home() {

  return (

    <main className="bg-background text-foreground max-w-screen min-h-screen h-auto flex flex-col lg:scroll-smooth scroll-auto">
      <Header />
      <Hero />
      <Features/>
      <DownloadExtension/>
      <FAQ/>
      <Footer/>
    </main>

  );
}
