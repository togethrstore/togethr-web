import React from "react";
import Image from "next/image";
import ImageOne from "../public/assets/images/categories/appliances/image1.png";
import ImageTwo from "../public/assets/images/categories/appliances/image2.png";
import ImageThree from "../public/assets/images/categories/appliances/image3.png";
import ImageFour from "../public/assets/images/categories/appliances/image4.png";
import { LeftButton, LeftButtonMob, RightButtonMob } from "./Buttons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    title: "Televisions",
    image: ImageOne,
    buttonLabel: "Coming Soon",
    buttonHref: "https://u4lncn4kip6.typeform.com/to/UwUMl38w",
  },
  {
    title: "Washing Machine",
    image: ImageTwo,
    buttonLabel: "Coming Soon",
    buttonHref: "https://u4lncn4kip6.typeform.com/to/UwUMl38w",
  },
  {
    title: "Air Conditioners",
    image: ImageThree,
    buttonLabel: "Coming Soon",
    buttonHref: "https://u4lncn4kip6.typeform.com/to/UwUMl38w",
  },
  {
    title: "Suggest a product",
    image: ImageFour,
    buttonLabel: "Suggest",
    buttonHref: "https://u4lncn4kip6.typeform.com/to/GTuIxk9r",
  },
  // Add more items as needed
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
        <div className="text-black text-xl lg:text-2xl bold">
          Home Appliances
        </div>
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

export default function ApplicancesMob() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl pb-6">
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
                      <button
                        className={`w-full medium lg:bold py-3 text-base mt-2 bg-[white] rounded-2xl border-2 border-[#625DF5] hover:bg-[#625DF5] hover:border-[#625DF5] text-[#625DF5] hover:text-white transition-all duration-300"
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
