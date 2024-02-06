import React from "react";
import Image from "next/image";
import HoverButton from "../../public/assets/images/form/button-hover.png";

const categories = [
  {
    id: 3,
    text: "How many hours do you use your phone daily?",
    options: ["Under 4 hours", "4 to 6 hours", "6+ hours"],
  },
];

const TabThree = ({ nextTab, save }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col gap-y-6 px-6 py-4 lg:px-0 max-w-4xl xl:max-w-7xl">
        {/* <div className="bold text-xl lg:text-2xl">
          <span>3. </span>
          How many hours do you use your phone daily?{" "}
        </div> */}
        {categories.map((category, index) => (
          <div key={index}>
            <div className="bold text-xl lg:text-2xl pb-3">
              {category.id}. {category.text}
            </div>
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

export default TabThree;
