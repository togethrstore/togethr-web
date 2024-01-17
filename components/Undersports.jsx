import React from "react";
import Image from "next/image";
import ImageOne from "../public/assets/images/categories/sports/image1.png";
import ImageTwo from "../public/assets/images/categories/sports/image2.png";
import ImageThree from "../public/assets/images/categories/sports/image3.png";
import ImageFour from "../public/assets/images/categories/sports/image4.png";

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
    buttonLabel: "Join Waitlist",
    buttonHref: "/phones",
  },
  {
    title: "Phones",
    image: ImageThree,
    buttonLabel: "Join Waitlist",
    buttonHref: "/phones",
  },
  {
    title: "Phones",
    image: ImageFour,
    buttonLabel: "Suggest",
    buttonHref: "/phones",
  },
  // Add more items as needed
];

export default function Undersports() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl">
          <div className="flex flex-col gap-y-4">
            <div className="text-black text-2xl bold">Electronics</div>
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
                    <button
                      className={`w-full bold py-4 text-base ${
                        index === 0
                          ? "text-white bg-[#625DF5] hero-button"
                          : "text-[#625DF5] bg-white rounded-2xl border-2 border-[#625DF5]"
                      }`}
                    >
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
