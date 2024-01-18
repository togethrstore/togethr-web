import React from "react";
import Image from "next/image";
import HeroImg from "../public/assets/images/hero/hero.png";
import HeroMob from "../public/assets/images/hero/hero-mob.png";

export default function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl xl:max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-36">
        <div className="flex flex-col gap-y-5 lg:gap-y-12 px-6 lg:px-0">
          <div className="flex flex-col gap-y-4">
            <div className="text-[2.5rem] lg:text-[3.5rem] text-black bold">
              Find the right <br /> product for you.
            </div>
            <div className="medium text-[#51636F] text-base lg:text-lg">
              Real experts — Personalized product picks — for free!
            </div>
          </div>
          <button className="w-full lg:w-max medium hero-button py-3 px-12 text-white text-lg">
            Shop with Expert
          </button>
        </div>
        <div className="w-[80%] lg:hidden">
          <Image src={HeroMob} alt="" />
        </div>
        <div className="w-[50%] hidden lg:block">
          <Image src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
}
