import React, { useState } from "react";
import Image from "next/image";
import InfoCircle from "../../public/assets/images/form/info-circle.png";

export default function TabTwo({ nextTab, save }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = parseInt(inputValue);

    if (
      !isNaN(numericValue) &&
      numericValue >= 10000 &&
      numericValue <= 200000
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setValue(inputValue);
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
              value={value}
              onChange={handleInputChange}
              className="input-two border-[2.5px] border-[#625DF533] p-4 rounded-xl outline-none w-full lg:w-5/12 lg:mt-6 regular"
            />
            <div className="info-box w-full lg:w-5/12 flex gap-x-2 items-center medium text-[#51636F] text-xs lg:text-base p-2 lg:p-4 border-2 border-[#625DF533] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
              <div className="w-6 inline-flex">
                <Image src={InfoCircle} alt="" />
              </div>
              <div>Please enter a number between ₹10,000 - ₹2,00,000</div>
            </div>
            <button
              onClick={() => {
                if (isValid) {
                  save(value);
                  nextTab();
                }
              }}
              className={`w-full lg:w-5/12 mt-2 lg:mt-4 bold bg-[#625DF5] rounded-2xl border-2 border-[#625DF5] ${
                isValid
                  ? "bg-[#625DF5] transition-all duration-500 hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 text-white"
                  : "cursor-not-allowed opacity-50 text-gray-400"
              } transition-all duration-300 py-2.5 lg:py-4 text-base`}
              disabled={!isValid}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
