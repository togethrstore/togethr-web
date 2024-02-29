import React from "react";
import Image from "next/image";
import Requirement from "../public/assets/images/about/requirement.png";
import Expert from "../public/assets/images/about/expert.png";
import Cart from "../public/assets/images/about/cart.png";

export default function About() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-6 px-6 py-10 lg:px-0 max-w-4xl xl:max-w-7xl lg:py-16 mx-7">
          <div className="flex flex-col gap-y-4">
            {/* <div className="medium text-[#51636F] text-base lg:text-lg">
              Lorem Ipsum dos amet. Lorem Ipsum dos amet. Lorem Ipsum dos amet.
            </div> */}
          </div>
          <div className="w-full flex flex-col gap-y-6 lg:flex-row justify-between">
            <div className="w-full lg:w-[30%] p-6 flex gap-x-4 lg:flex-col about-box items-center">
              <div className="w-32 lg:w-28">
                <Image src={Requirement} alt="" priority={true} />
              </div>
              <div>
                <div className="text-black text-start lg:text-center text-lg lg:text-2xl bold pb-2 lg:py-4">
                Conversational Experience
                </div>
                <div className="medium text-[#51636F] text-lg text-start lg:text-center">
                Chat with our AI like a friend, getting all your shopping queries answered at one place
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[30%] p-6 flex gap-x-4 lg:flex-col about-box items-center">
              <div className="w-32 lg:w-28">
                <Image src={Expert} alt="" priority={true} />
              </div>
              <div>
                <div className="text-black text-start lg:text-center text-lg lg:text-2xl bold pb-2 lg:py-4">
                Curated Choices
                </div>
                <div className="medium text-[#51636F] text-lg text-start lg:text-center">
                Receive hyper-personalized product recommendations, with the flexibility to explore all options.                </div>
              </div>
            </div>
            {/* asaushfiahwfi */}
            <div className="w-full lg:w-[30%] p-6 flex gap-x-4 lg:flex-col about-box items-center">
              <div className="w-32 lg:w-28">
                <Image src={Cart} alt="" priority={true} />
              </div>
              <div className="">
                <div className="text-black text-start lg:text-center text-lg lg:text-2xl bold pb-2 lg:py-4">
                Purpose-built for Shopping
                </div>
                <div className="medium text-[#51636F] text-lg text-start lg:text-center">
                Experience shopping-focused AI, designed specifically to support your decision-making                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
