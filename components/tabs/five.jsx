import React from "react";
import Image from "next/image";
import HoverButton from "../../public/assets/images/form/button-hover.png";

const categories = [
  {
    id: 5,
    text: "How often do you play games on your phone?",
    options: [
      "Never",
      "Rarely (once a week or less)",
      "Occasionally (a few times a week),",
      "Daily",
    ],
  },
];

const TabFive = ({ nextTab, save }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col gap-y-6 px-6 py-10 lg:px-0 max-w-4xl xl:max-w-7xl lg:py-16">
        <div className="text-[#51636F] text-lg lg:text-xl medium">
          Your responses will be recorded here
        </div>
        <div className="bold text-xl lg:text-2xl">
          <span>5. </span>
          Select a category you need expert assistance
        </div>
        {categories.map((category, index) => (
          <div key={index}>
            <div className="bold text-xl lg:text-2xl pb-3">{category.text}</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {category.options.map((item, itemIndex) => (
                <button
                  key={itemIndex}
                  className="text-[#51636F] bg-white hover:bg-[#625DF533] group hover:text-black flex items-center justify-between text-base lg:text-lg bold p-4 border-[2.5px] border-[#625DF533] hover:border-[#625DF5] text-start rounded-2xl transition-all duration-300"
                  onClick={() => {
                    save(item);
                    nextTab();
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
      </div>
    </div>
  );
};

export default TabFive;
