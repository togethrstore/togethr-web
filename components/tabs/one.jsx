import React from "react";
import Image from "next/image";
import HoverButton from "../../public/assets/images/form/button-hover.png";
import InfoCircle from "../../public/assets/images/form/info-circle.png";

const categories = [
  {
    label: "Electronics",
    items: ["Phones", "Laptops", "Headphones", "Smart Watches"],
  },
  { label: "Sports", items: ["Cycling"] },
];

const TabOne = ({ nextTab, save }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col gap-y-6 px-6 py-4 lg:px-0 max-w-4xl xl:max-w-7xl">
        <div className="bold text-xl lg:text-2xl">
          <span>1. </span>
          Choose a category for expert guidance{" "}
        </div>
        {categories.map((category, index) => (
          <div key={index}>
            <div className="bold text-xl lg:text-2xl pb-3">
              {category.label}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {category.items.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className={`text-[#51636F] bg-white hover:bg-[#625DF533] group hover:text-black flex items-center justify-between text-base lg:text-lg bold p-4 border-[2.5px] border-[#625DF533] hover:border-[#625DF5] text-start rounded-2xl transition-all duration-300 ${
                    item === "Phones" ||
                    item === "Laptops" ||
                    item === "Headphones" ||
                    item === "Smart Watches" ||
                    item === "Cycling"
                      ? ""
                      : "pointer-events-none opacity-50"
                  }`}
                  onClick={() => {
                    if (item === "Phones") {
                      save(item);
                      nextTab();
                    } else if (item === "Laptops") {
                      window.open(
                        "https://u4lncn4kip6.typeform.com/to/SRKq2e0W"
                      );
                    } else if (item === "Headphones") {
                      window.open(
                        "https://u4lncn4kip6.typeform.com/to/RCZ22YtM"
                      );
                    } else if (item === "Smart Watches") {
                      window.open(
                        "https://u4lncn4kip6.typeform.com/to/MC03ITjZ"
                      );
                    } else if (item === "Cycling") {
                      window.open(
                        "https://u4lncn4kip6.typeform.com/to/kvLxQAd8"
                      );
                    }
                  }}
                  onTouchStart={() => {
                    if (item === "Phones") {
                      save(item);
                      nextTab();
                    } else if (item === "Laptops") {
                      window.open(
                        "https://u4lncn4kip6.typeform.com/to/SRKq2e0W"
                      );
                    } else if (item === "Headphones") {
                      window.open(
                        "https://u4lncn4kip6.typeform.com/to/RCZ22YtM"
                      );
                    } else if (item === "Smart Watches") {
                      window.open(
                        "https://u4lncn4kip6.typeform.com/to/MC03ITjZ"
                      );
                    }
                  }}
                >
                  <div>{item}</div>
                  <div className="w-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100 inline-flex">
                    <Image src={HoverButton} alt="" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="w-full flex items-center justify-between">
          <div className="text-lg lg:text-xl bold">Home Appliances</div>
          <div className="flex items-center gap-x-2">
            <div className="text-base text-[#625DF5] bold">Coming Soon</div>
            <div className="w-5 lg:w-6 inline-flex">
              <Image src={InfoCircle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabOne;
