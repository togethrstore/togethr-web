import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Testimonials from "../components/Testi";
import Electronics from "../components/Electronics";
import Undersports from "../components/Undersports";
import Appliances from "../components/Appliances";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="">
        <Hero />
        <div className="categories-desktop">
          <Electronics />
          <Undersports />
          <Appliances />
        </div>
        <About />
        {/* <Carousel /> */}
        <Testimonials />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
