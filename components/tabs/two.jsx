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
        <div className="w-full flex flex-col gap-y-6 px-6 py-10 lg:px-0 max-w-4xl xl:max-w-7xl lg:py-16"></div>
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
            <div>Enter the informative text about the question here</div>
          </div>
          <button
            onClick={() => {
              save(value);
              nextTab();
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
