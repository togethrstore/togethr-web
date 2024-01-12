import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "../public/assets/images/arrow-down.png";
import { motion } from "framer-motion";

export default function Faq() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-16">
          <div className="flex flex-col gap-y-4">
            <div className="text-black bold text-[2.5rem]">
              Frequently asked questions
            </div>
            <div className="flex flex-col pt-12">
              <div className="flex flex-col">
                <button onClick={toggleContentVisibility}>
                  <div className="w-full flex justify-between">
                    <div className="text-black bold text-xl">
                      What is Togethr?
                    </div>
                    <div className="w-6">
                      <Image src={ArrowDown} alt="" />
                    </div>
                  </div>
                </button>
                {isContentVisible && (
                  <div className="regular text-[#51636F] text-lg pt-4">
                    Lorem Ipsum dos amet. Lorem Ipsum dos amet. Lorem Ipsum dos
                    amet.
                  </div>
                )}
                <div className="w-full bg-[#625DF5] h-0.5 mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
