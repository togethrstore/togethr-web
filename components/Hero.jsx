import React from "react";
import Image from "next/image";
import HeroImg from "../public/assets/images/hero/hero.png";

export default function Hero() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl xl:max-w-7xl flex items-center justify-between py-36">
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-4">
            <div className="text-[3.5rem] text-black bold">
              Find the right <br /> product for you.
            </div>
            <div className="regular text-[#51636F] text-lg">
              Real experts — Personalized product picks — for free!
            </div>
          </div>
          <button className="w-max regular hero-button py-3 px-12 text-white text-lg">
            Shop with Expert
          </button>
        </div>
        <div className="w-[50%]">
          <Image src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
}
