import React, { useState } from "react";
import Image from "next/image";
import HoverButton from "../public/assets/images/form/button-hover.png";
import InfoCircle from "../public/assets/images/form/info-circle.png";

const categories = [
  {
    id: 1,
    question: "Select a category you need expert assistance",
    items: [
      { label: "Electronics", items: ["Phones", "Laptops", "Headphones"] },
      { label: "Sports", items: ["Cycling", "Rowing"] },
    ],
  },
  {
    id: 2, // Adjusted id
    question: "How much would you like to spend?",
    items: [], // No items for this category
  },
  {
    id: 3,
    question: "How many hours do you use your phone daily?",
    items: [
      {
        label: "",
        items: ["Under 4 hours", "4 to 6 hours", "6+ hours"],
      },
    ],
  },
  {
    id: 4,
    question: "How will you use your phone's camera?",
    items: [
      {
        label: "",
        items: [
          "Casual photos occasionally",
          "High-quality photos for personal use",
          "Professional photography/videography",
        ],
      },
    ],
  },
  {
    id: 5,
    question: "How often do you play games on your phone?",
    items: [
      {
        label: "",
        items: [
          "Never",
          "Rarely (once a week or less)",
          "Occasionally (a few times a week)",
          "Daily",
        ],
      },
    ],
  },
  {
    id: 6,
    question: "Do you want to talk to an expert?",
    items: [
      {
        label: "",
        items: ["Yes", "No"],
      },
    ],
  },
];

const MyForm = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(5);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col gap-y-6 px-6 py-10 lg:px-0 max-w-4xl xl:max-w-7xl lg:py-16">
        <div className="text-[#51636F] text-lg lg:text-xl medium">
          Your responses will be recorded here
        </div>
        {categories.map(
          (category, index) =>
            activeTabIndex === index && (
              <div key={index}>
                <div className="bold text-xl lg:text-2xl">
                  <span>{category.id}. </span>
                  {category.question}
                </div>
                {category.items.length > 0 ? (
                  category.items.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <div className="bold text-xl lg:text-2xl py-3">
                        {group.label}
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {group.items.map((item, itemIndex) => (
                          <button
                            key={itemIndex}
                            className="text-[#51636F] bg-white hover:bg-[#625DF533] group hover:text-black flex items-center justify-between text-base lg:text-lg bold p-4 border-[2.5px] border-[#625DF533] hover:border-[#625DF5] text-start rounded-2xl transition-all duration-300"
                          >
                            <div>{item}</div>
                            <div className="w-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100 inline-flex">
                              <Image src={HoverButton} alt="" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col gap-y-4">
                    <input
                      type="number"
                      placeholder="Your answer here"
                      className="border-[2.5px] border-[#625DF533] p-4 rounded-xl outline-none w-7/12 lg:w-5/12 mt-6 regular"
                    />
                    <div className="info-box w-10/12 lg:w-max flex gap-x-2 items-center medium text-[#51636F] text-xs lg:text-base p-2 lg:p-4 border-2 border-[#625DF533] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
                      <div className="w-6 inline-flex">
                        <Image src={InfoCircle} alt="" />
                      </div>
                      <div>
                        Enter the informative text about the question here
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MyForm;
