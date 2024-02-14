import React from "react";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import FaqAboutUs from "../components/Faq-Aboutus";
import Headerr from "../components/Headerr";

export default function AboutUs() {
  return (
    <>
      <Headerr />
      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl xl:max-w-7xl flex flex-col gap-y-3 lg:gap-y-4 items-start py-10 lg:py-20 px-6 lg:px-0">
          <div className="bold text-black text-xl lg:text-2xl">About us </div>
          <div className="text-[#51636F] text-base lg:text-lg regular">
            Togethr is a community of passionate people sharing what they love
            with others. We want to make shopping fun again, and it starts by
            connecting with a shopping buddy who is passionate about their
            category and committed to helping you find the right product for
            you.
          </div>
          <div className="bold text-black text-xl lg:text-2xl">Our Mission</div>
          <div className="text-[#51636F] text-base lg:text-lg regular">
            Connect real, unbiased experts and consumers so that they find the
            perfect product together.
          </div>
        </div>
      </div>
      <FaqAboutUs />
      <Footer />
    </>
  );
}
