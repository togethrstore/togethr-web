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
import ElectronicsMob from "../components/ElectronicsMob";
import UndersportsMob from "../components/UndersportsMob";
import ApplicancesMob from "../components/AppliancesMob";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="">
        <Hero />
        <div className="categories-desktop hidden lg:block">
          <Electronics />
          <Undersports />
          <Appliances />
        </div>
        <div className="lg:hidden">
          <ElectronicsMob />
          <UndersportsMob />
          <ApplicancesMob />
        </div>
        <About />
        <Carousel />
        <Testimonials />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
