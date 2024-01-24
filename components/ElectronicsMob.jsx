import React from "react";
import Image from "next/image";
import ImageOne from "../public/assets/images/categories/electronics/image1.png";
import ImageTwo from "../public/assets/images/categories/electronics/image2.png";
import ImageThree from "../public/assets/images/categories/electronics/image3.png";
import ImageFour from "../public/assets/images/categories/electronics/image4.png";
import { LeftButton, LeftButtonMob, RightButtonMob } from "./Buttons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title: "Laptops",
    image: ImageFour,
    buttonLabel: "Shop with Expert",
    buttonHref: "/",
  },
  {
    title: "Phones",
    image: ImageOne,
    buttonLabel: "Shop with Expert",
    buttonHref: "/",
  },
  {
    title: "Headphones",
    image: ImageTwo,
    buttonLabel: "Shop with Expert",
    buttonHref: "/",
  },
  {
    title: "Smart Watches",
    image: ImageThree,
    buttonLabel: "Shop with Expert",
    buttonHref: "/",
  },
];

const CustomSlider = ({ children }) => {
  let slider;

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    arrows: false,
  };

  const LeftArrow = (props) => {
    const { onClick } = props;
    return <LeftButtonMob onClick={onClick} />;
  };

  const RightArrow = (props) => {
    const { onClick } = props;
    return <RightButtonMob onClick={onClick} />;
  };

  const goToNextSlide = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between px-6 pb-6 lg:pb-0 lg:px-0">
        <div className="text-black text-xl lg:text-2xl bold">Electronics</div>
        <div className="flex gap-x-2">
          <LeftButtonMob onClick={goToPrevSlide} />
          <RightButtonMob onClick={goToNextSlide} />
        </div>
      </div>

      <Slider
        ref={(c) => (slider = c)}
        {...settings}
        nextArrow={<RightArrow onClick={goToNextSlide} />}
        prevArrow={<LeftArrow onClick={goToPrevSlide} />}
      >
        {children}
      </Slider>
    </div>
  );
};

export default function ElectronicsMob() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-12">
          <div className="flex flex-col gap-y-4 px-6">
            <div className="text-black bold text-2xl lg:text-[2.5rem]">
              Shop Categories
            </div>
            <div className="medium text-[#51636F] text-base lg:text-lg">
              Talk to real experts and buy authentic products at the best
              prices.
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div>
              <CustomSlider className="w-full flex items-center justify-between">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`w-max px-6 py-4 flex flex-col gap-y-4 rounded-2xl border-2 ${
                      item.buttonLabel === "Shop with Expert"
                        ? "border-[#625DF5] bg-white"
                        : "border-[#E0E0E0] bg-white"
                    }`}
                  >
                    <div className="text-black text-lg lg:text-xl bold">
                      {item.title}
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="w-40 py-4 xl:w-56 2xl:w-60">
                        <Image
                          src={item.image}
                          alt={item.title}
                          priority={true}
                        />
                      </div>
                    </div>
                    <a href={item.buttonHref}>
                      <button className="w-full medium bg-[#625DF5] rounded-2xl border-2 border-[#625DF5] hover:bg-white hover:border-[#625DF5] py-3 text-white hover:text-[#625df5] transition-all duration-300 text-base">
                        {item.buttonLabel}
                      </button>
                    </a>
                  </div>
                ))}
              </CustomSlider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
