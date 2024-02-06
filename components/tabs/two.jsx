import React, { useState } from "react";
import Image from "next/image";
import InfoCircle from "../../public/assets/images/form/info-circle.png";

export default function TabTwo({ nextTab, save }) {
  const [value, setValue] = useState(null);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col gap-y-6 px-6 py-4 lg:px-0 max-w-4xl xl:max-w-7xl">
          <div className="bold text-xl lg:text-2xl">
            <span>2. </span>
            How much would you like to spend?{" "}
          </div>
          <div className="flex flex-col gap-y-4">
            <input
              type="number"
              placeholder="Your answer here"
              value={value || ""}
              onChange={handleInputChange}
              className="border-[2.5px] border-[#625DF533] p-4 rounded-xl outline-none w-7/12 lg:w-5/12 mt-6 regular"
            />
            <div className="info-box w-10/12 lg:w-max flex gap-x-2 items-center medium text-[#51636F] text-xs lg:text-base p-2 lg:p-4 border-2 border-[#625DF533] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
              <div className="w-6 inline-flex">
                <Image src={InfoCircle} alt="" />
              </div>
              <div>Please enter a number between ₹10,000 - ₹2,00,000</div>
            </div>
            <button
              onClick={() => {
                save(value);
                nextTab();
              }}
              className="w-[50%] bold bg-[#625DF5] rounded-2xl border-2 border-[#625DF5] hover:bg-white hover:border-[#625DF5] py-2.5 lg:py-4 text-white hover:text-[#625df5] transition-all duration-300 text-base"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
