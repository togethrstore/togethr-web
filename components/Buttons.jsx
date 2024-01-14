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

const Rating = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="vuesax/linear/star">
        <g id="star">
          <path
            id="Vector"
            d="M13.73 3.51001L15.49 7.03002C15.73 7.52002 16.37 7.99002 16.91 8.08002L20.1 8.61002C22.14 8.95002 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.02 21.35C5.88 22.62 4.58 21.67 5.14 19.25L5.85 16.18C5.98 15.6 5.75 14.79 5.33 14.37L2.85 11.89C1.39 10.43 1.86 8.95002 3.9 8.61002L7.09 8.08002C7.62 7.99002 8.26 7.52002 8.5 7.03002L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z"
            fill="#FEEA00"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export { LeftButton, RightButton, Rating };
