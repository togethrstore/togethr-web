import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="">
        <Hero />
        <About />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
