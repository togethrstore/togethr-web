import React from "react";
import Image from "next/image";
import ImageOne from "../public/assets/images/categories/appliances/image1.png";
import ImageTwo from "../public/assets/images/categories/appliances/image2.png";
import ImageThree from "../public/assets/images/categories/appliances/image3.png";
import ImageFour from "../public/assets/images/categories/appliances/image4.png";

const items = [
  {
    title: "Televisions",
    image: ImageOne,
    buttonLabel: "Coming Soon",
    buttonHref: "https://u4lncn4kip6.typeform.com/to/UwUMl38w",
  },
  {
    title: "Washing Machine",
    image: ImageTwo,
    buttonLabel: "Coming Soon",
    buttonHref: "https://u4lncn4kip6.typeform.com/to/UwUMl38w",
  },
  {
    title: "Air Conditioners",
    image: ImageThree,
    buttonLabel: "Coming Soon",
    buttonHref: "https://u4lncn4kip6.typeform.com/to/UwUMl38w",
  },
  {
    title: "Suggest a product",
    image: ImageFour,
    buttonLabel: "Suggest",
    buttonHref: "https://u4lncn4kip6.typeform.com/to/GTuIxk9r",
  },
  // Add more items as needed
];

export default function Appliances() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-12">
          <div className="flex flex-col gap-y-4">
            <div className="text-black text-2xl bold">Home Appliances</div>
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
                    <Image src={item.image} alt={item.title} priority={true} />
                  </div>
                  <a href={item.buttonHref}>
                    <button
                      className={`w-full bold py-4 text-base ${
                        index === 5
                          ? "bg-[#625DF5] rounded-2xl border-2 border-[#625DF5] hover:bg-[white] hover:border-[#625DF5] text-white hover:text-[#625df5] transition-all duration-300"
                          : "bg-[white] rounded-2xl border-2 border-[#625DF5] hover:bg-[#625DF5] hover:border-[#625DF5] text-[#625DF5] hover:text-white transition-all duration-300"
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
