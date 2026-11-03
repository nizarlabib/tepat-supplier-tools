import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { About } from "../components/sections/About";
import { BrandShowcase } from "../components/sections/BrandShowcase";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Products } from "../components/sections/Products";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";

export function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-graphite focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Products />
        <About />
        <WhyChooseUs />
        <BrandShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
