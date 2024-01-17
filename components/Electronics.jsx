import React from "react";
import Image from "next/image";
import ImageOne from "../public/assets/images/categories/electronics/image1.png";
import ImageTwo from "../public/assets/images/categories/electronics/image2.png";
import ImageThree from "../public/assets/images/categories/electronics/image3.png";
import ImageFour from "../public/assets/images/categories/electronics/image4.png";

const items = [
  {
    title: "Laptops",
    image: ImageOne,
    buttonLabel: "Shop with Expert",
    buttonHref: "/laptops",
  },
  {
    title: "Phones",
    image: ImageTwo,
    buttonLabel: "Shop with Expert",
    buttonHref: "/phones",
  },
  {
    title: "Phones",
    image: ImageThree,
    buttonLabel: "Shop with Expert",
    buttonHref: "/phones",
  },
  {
    title: "Phones",
    image: ImageFour,
    buttonLabel: "Shop with Expert",
    buttonHref: "/phones",
  },
  // Add more items as needed
];

export default function Electronics() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-12">
          <div className="flex flex-col gap-y-4">
            <div className="text-black bold text-[2.5rem]">Shop Categories</div>
            <div className="regular text-[#51636F] text-lg">
              Talk to real experts and buy authentic products at the best
              prices.
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="text-black text-2xl bold">Under Sports</div>
            <div className="w-full flex items-center justify-between">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`w-max px-6 py-4 flex flex-col gap-y-4 rounded-2xl border-2 ${
                    item.buttonLabel === "Shop with Expert"
                      ? "border-[#625DF5] bg-white"
                      : "border-[#E0E0E0] bg-white"
                  }`}
                >
                  <div className="text-black text-xl bold">{item.title}</div>
                  <div className="w-40 xl:w-56 2xl:w-60">
                    <Image src={item.image} alt={item.title} />
                  </div>
                  <a href={item.buttonHref}>
                    <button className="w-full bold hero-button py-4 text-white text-base">
                      {item.buttonLabel}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}