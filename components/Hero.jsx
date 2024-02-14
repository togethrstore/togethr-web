import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DesktopOne from "../public/assets/images/hero/desktop-1.png";
import DesktopTwo from "../public/assets/images/hero/desktop-2.png";
import DesktopThree from "../public/assets/images/hero/desktop-3.png";
import DesktopFour from "../public/assets/images/hero/desktop-4.png";
import DesktopFive from "../public/assets/images/hero/desktop-5.png";
import DesktopSix from "../public/assets/images/hero/desktop-6.png";
import DesktopSeven from "../public/assets/images/hero/desktop-7.png";
import DesktopEight from "../public/assets/images/hero/desktop-8.png";
import DesktopNine from "../public/assets/images/hero/desktop-9.png";

import MobileOne from "../public/assets/images/hero/mobile-1.png";
import MobileTwo from "../public/assets/images/hero/mobile-2.png";
import MobileThree from "../public/assets/images/hero/mobile-3.png";
import MobileFour from "../public/assets/images/hero/mobile-4.png";
import MobileFive from "../public/assets/images/hero/mobile-5.png";
import MobileSix from "../public/assets/images/hero/mobile-6.png";
import MobileSeven from "../public/assets/images/hero/mobile-7.png";
import MobileEight from "../public/assets/images/hero/mobile-8.png";
import MobileNine from "../public/assets/images/hero/mobile-9.png";

const mobileImages = [
  MobileOne,
  MobileTwo,
  MobileThree,
  MobileFour,
  MobileFive,
  MobileSix,
  MobileSeven,
  MobileEight,
  MobileNine,
];

const desktopImages = [
  DesktopOne,
  DesktopTwo,
  DesktopThree,
  DesktopFour,
  DesktopFive,
  DesktopSix,
  DesktopSeven,
  DesktopEight,
  DesktopNine,
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === desktopImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slides every 5 seconds

    return () => clearTimeout(interval);
  }, [index]);

  const [mobindex, setmobIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setmobIndex((prevIndex) =>
        prevIndex === mobileImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Change slides every 5 seconds

    return () => clearTimeout(interval);
  }, [mobindex]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl xl:max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-36 lg:pt-44">
        <div className="flex flex-col gap-y-5 lg:gap-y-12 px-6 lg:px-0">
          <div className="flex flex-col gap-y-4">
            <div className="text-[2.5rem] lg:text-[3.5rem] text-black bold">
              Find the right <br /> product for you
            </div>
            <div className="medium text-[#51636F] text-base lg:text-lg">
              Real experts — Personalized product picks — for free!
            </div>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="/form">
            <button className="w-full lg:w-max medium bg-[#625DF5] transition-all duration-500 rounded-2xl hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 py-3 px-12 text-white text-lg">
              Shop with Expert
            </button>
          </a>
        </div>
        <div className="w-[80%] lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={mobindex}
          >
            <Image src={mobileImages[mobindex]} alt="" priority={true} />
          </motion.div>{" "}
        </div>
        <div className="w-[50%] hidden lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={index}
          >
            <Image src={desktopImages[index]} alt="" priority={true} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
