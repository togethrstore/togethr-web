import React from "react";
import Image from "next/image";
import ImageOne from "../public/assets/images/categories/sports/image1.png";
import ImageTwo from "../public/assets/images/categories/sports/image2.png";
import ImageThree from "../public/assets/images/categories/sports/image3.png";
import ImageFour from "../public/assets/images/categories/sports/image4.png";
import { LeftButton, LeftButtonMob, RightButtonMob } from "./Buttons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title: "Cycling",
    image: ImageOne,
    buttonLabel: "Shop with Expert",
    buttonHref: "/laptops",
  },
  {
    title: "Tennis",
    image: ImageTwo,
    buttonLabel: "Join Waitlist",
    buttonHref: "/phones",
  },
  {
    title: "Golf",
    image: ImageThree,
    buttonLabel: "Join Waitlist",
    buttonHref: "/phones",
  },
  {
    title: "Running",
    image: ImageFour,
    buttonLabel: "Suggest",
    buttonHref: "/phones",
  },
];

const CustomSlider = ({ children }) => {
  let slider;

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
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
        <div className="text-black text-xl lg:text-2xl bold">Under Sports</div>
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

export default function UndersportsMob() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl pb-12">
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
                    <div className="w-40 xl:w-56 2xl:w-60">
                      <Image
                        src={item.image}
                        alt={item.title}
                        priority={true}
                      />
                    </div>
                    <a href={item.buttonHref}>
                      <button
                        className={`w-full medium lg:bold py-3 text-white text-base mt-2 ${
                          index === 0
                            ? "text-white bg-[#625DF5] hero-button"
                            : "text-[#625DF5] bg-white rounded-2xl border-2 border-[#625DF5]"
                        }`}
                      >
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
