import React from "react";
import Image from "next/image";
import Requirement from "../public/assets/images/about/requirement.png";
import Expert from "../public/assets/images/about/expert.png";
import Cart from "../public/assets/images/about/cart.png";

export default function About() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-16">
          <div className="flex flex-col gap-y-4">
            <div className="text-black bold text-[2.5rem]">How it works?</div>
            <div className="regular text-[#51636F] text-lg">
              Lorem Ipsum dos amet. Lorem Ipsum dos amet. Lorem Ipsum dos amet.
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[30%] p-6 flex flex-col about-box">
              <div className="w-28">
                <Image src={Requirement} alt="" />
              </div>
              <div className="text-black text-2xl bold py-4">
                Share Requirements
              </div>
              <div className="regular text-[#51636F] text-lg">
                Fill out a form <br />
                (takes less than a minute)
              </div>
            </div>
            <div className="w-[30%] p-6 flex flex-col about-box">
              <div className="w-28">
                <Image src={Expert} alt="" />
              </div>
              <div className="text-black text-2xl bold py-4">
                Talk to Expert
              </div>
              <div className="regular text-[#51636F] text-lg">
                Our expert will contact you to discuss your requirements.
              </div>
            </div>
            {/* asaushfiahwfi */}
            <div className="w-[30%] p-6 flex flex-col about-box">
              <div className="w-28">
                <Image src={Cart} alt="" />
              </div>
              <div className="text-black text-2xl bold py-4">Shop Togethr </div>
              <div className="regular text-[#51636F] text-lg">
                Purchase your perfect product at the best price.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
