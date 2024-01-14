import React from "react";
import Image from "next/image";
import ArrowLeft from "../public/assets/images/carousel/arrow-left.png";
import ArrowRight from "../public/assets/images/carousel/arrow-right.png";

const LeftButton = () => {
  return (
    <button>
      <div className="w-12 rounded-full border-2 border-[#625df5] inline-flex">
        <Image className="button-bg" src={ArrowLeft} alt="" />
      </div>
    </button>
  );
};

const RightButton = () => {
  return (
    <button>
      <div className="w-12 rounded-full border-2 border-[#625df5] inline-flex">
        <Image className="button-bg" src={ArrowRight} alt="" />
      </div>
    </button>
  );
};

export { LeftButton, RightButton };
