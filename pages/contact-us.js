import React from "react";
import Footer from "../components/Footer";
import Headerr from "../components/Headerr";

export default function ContactUs() {
  return (
    <>
      <Headerr />
      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl xl:max-w-7xl flex flex-col gap-y-3 lg:gap-y-4 items-start py-10 lg:py-20 px-6 lg:px-0">
          <div className="bold text-black text-xl lg:text-2xl">Contact us </div>
          <div className="text-[#51636F] text-base lg:text-lg regular">
            You may contact us using the information below:
          </div>
          <div className="text-[#51636F] text-base lg:text-lg regular">
            <span className="bold text-black">Phone/WhatsApp:</span>{" "}
            +91-9311651200
          </div>
          <div className="text-[#51636F] text-base lg:text-lg regular">
            <span className="bold text-black"> E-Mail ID:</span>{" "}
            Chaitanya@togethr.store{" "}
          </div>
          <div className="text-[#51636F] text-base lg:text-lg regular">
            <span className="bold text-black">Legal entity name:</span> TOGETHR
            EXPERIENCE STORES PRIVATE LIMITED{" "}
          </div>{" "}
          <div className="text-[#51636F] text-base lg:text-lg regular">
            <span className="bold text-black">Registered Address:</span> Plot no
            4, Minarch Tower, 2nd Floor, Sector 45, Gurugram, Haryana - 122003{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
