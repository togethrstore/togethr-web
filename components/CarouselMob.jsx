import React, { useState, useCallback } from "react";
import Image from "next/image";
import ExpertOneM from "../public/assets/images/carousel/expert-mob1.png";
import ExpertTwoM from "../public/assets/images/carousel/expert-mob2.png";
import ExpertThreeM from "../public/assets/images/carousel/expert-mob3.png";
import ExpertFourM from "../public/assets/images/carousel/expert-mob4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = useCallback((current, next) => {
    setCurrentSlide(next);
  }, []);

  const customPaging = (i) => (
    <div
      style={{
        width: "10px",
        height: "10px",
        margin: "20px 0px",
        listStyle: "none",
        backgroundColor: i === currentSlide ? "#625DF5" : "white",
        border: `2px solid #625DF5`,
        borderRadius: "50%",
        cursor: "pointer",
      }}
    />
  );

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10%",
    arrows: false,
    dots: true,
    beforeChange: handleBeforeChange,
    customPaging,
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
export default function CarouselMob() {
  return (
    <div>
      <div className="w-full lg:hidden flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-12 faq-bg">
        <div className="flex flex-col gap-y-4 px-6">
          <div className="text-black bold text-2xl lg:text-[2.5rem]">
            Meet the Real Experts{" "}
          </div>
          <div className="medium text-[#51636F] text-base lg:text-lg">
            Passionate people who are happy to be your shopping buddies for your
            next big purchase{" "}
          </div>
        </div>
        <CustomSlider className="w-full flex items-center justify-between">
          <div className="w-96">
            <Image src={ExpertOneM} alt={""} priority={true} />
          </div>
          <div className="w-96">
            <Image src={ExpertTwoM} alt={""} priority={true} />
          </div>{" "}
          <div className="w-96">
            <Image src={ExpertThreeM} alt={""} priority={true} />
          </div>{" "}
          <div className="w-96">
            <Image src={ExpertFourM} alt={""} priority={true} />
          </div>
        </CustomSlider>
        <div className="w-full flex justify-center px-6 pt-4">
          <button className="w-full lg:w-max medium hero-button py-3 px-16 text-white text-lg">
            Shop with Expert
          </button>
        </div>
      </div>
    </div>
  );
}
