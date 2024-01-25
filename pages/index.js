import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";
import Electronics from "../components/Electronics";
import Undersports from "../components/Undersports";
import Appliances from "../components/Appliances";
import ElectronicsMob from "../components/ElectronicsMob";
import UndersportsMob from "../components/UndersportsMob";
import ApplicancesMob from "../components/AppliancesMob";
import CarouselMob from "../components/CarouselMob";
import Headerr from "../components/Headerr";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="">
        <Headerr />
        <Hero />
        <div className="categories-desktop hidden lg:block">
          <Electronics />
          <Undersports />
          <Appliances />
        </div>
        <div className="lg:hidden faq-bg">
          <ElectronicsMob />
          <UndersportsMob />
          <ApplicancesMob />
        </div>
        <About />
        <CarouselMob />
        <Carousel />
        <Testimonial />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
