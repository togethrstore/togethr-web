import React from "react";
import Rating from "./Rating";
import { LeftButton, RightButton } from "./Buttons";

const Card = () => {
  return (
    <>
      <div className="p-6 flex flex-col border-2 border-[#625DF5] rounded-2xl testi-bg">
        <div className="w-full flex justify-between">
          <div className="flex items-center h-max gap-x-4">
            <div className="w-14 h-14 bg-[#625DF5] border border-[#625DF5] rounded-full"></div>
            <div className="flex flex-col gap-y-1">
              <div className="bold text-lg text-black">
                Expert:
                <span className="medium text-[#51636F] text-lg">
                  {" "}
                  Shelby Martin
                </span>
              </div>
              <div className="bold text-lg text-black">
                Reviewer:
                <span className="medium text-[#51636F] text-lg">
                  {" "}
                  Brandon W
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-0.5">
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
          </div>
        </div>
        <div className="w-full bg-[#625DF5] h-[2px] my-6 rounded-2xl"></div>
        <div className="flex flex-col gap-y-6">
          <div className="bold text-xl text-black">
            Elizabeth was great - very trustworthy!
          </div>
          <div className="medium text-[#51636F] text-lg">
            Elizabeth was quick and knew exactly what I wanted when I needed
            some new hiking shoes. She found the best deal for me and was very
            friendly! 100% who you need to talk to for all of your gear needs.
            Expect great conversation and detailed recommendations when chatting
            with Elizabeth.
          </div>
          <div className="medium text-[#625DF5] text-lg">
            Verified Review I Submitted on Oct 6, 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default function Testimonials() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-16">
        <div className="flex flex-col gap-y-4">
          <div className="text-black bold text-[2.5rem]">We are Togethr</div>
          <div className="regular text-[#51636F] text-lg">
            Lorem Ipsum dos amasfasfet. Lorem Ipsum dos amet. Lorem Ipsum dos
            amet.
          </div>
        </div>
        <Card />
        <Card />
        <div className="w-full flex justify-center items-center gap-x-6">
          <LeftButton />
          <RightButton />
        </div>
      </div>
    </div>
  );
}
