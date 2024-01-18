import React from "react";
import Image from "next/image";
import Cycling from "../public/assets/images/carousel/cycling.png";
import Location from "../public/assets/images/carousel/location.png";
import Star from "../public/assets/images/carousel/star.png";
import Background from "../public/assets/images/carousel/example.png";
import ArrowLeft from "../public/assets/images/carousel/arrow-left.png";
import ArrowRight from "../public/assets/images/carousel/arrow-right.png";

const Carousel = () => {
  const carouselItems = [
    {
      imageUrl: Background.src,
      category: "Cycling",
      name: "Shelby Martin",
      title: "Indian Gold Medalist (2021)",
      location: "Mumbai",
      stars: "5 Stars (49)",
    },
    {
      imageUrl: Background.src,
      category: "Cycling",
      name: "Shelby Martin",
      title: "Indian Gold Medalist (2021)",
      location: "Mumbai",
      stars: "5 Stars (49)",
    },
    {
      imageUrl: Background.src,
      category: "Cycling",
      name: "Shelby Martin",
      title: "Indian Gold Medalist (2021)",
      location: "Mumbai",
      stars: "5 Stars (49)",
    },
    {
      imageUrl: Background.src,
      category: "Cycling",
      name: "Shelby Martin",
      title: "Indian Gold Medalist (2021)",
      location: "Mumbai",
      stars: "5 Stars (49)",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-16">
        <div className="flex flex-col gap-y-4">
          <div className="text-black bold text-[2.5rem]">
            Meet the Real Experts
          </div>
          <div className="medium text-[#51636F] text-lg">
            Lorem Ipsum dos amet. Lorem Ipsum dos amet. Lorem Ipsum dos amet.
          </div>
        </div>
        <div className="w-full flex justify-between relative">
          <button>
            <div className="w-12 absolute top-36 left-1 rounded-full border-2 border-[#625df5] inline-flex">
              <Image className="button-bg" src={ArrowLeft} alt="" />
            </div>
          </button>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              className="w-[23%] xl:w-[22%] h-[22rem] bg-cover rounded-2xl p-6"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="w-max bg-[#625DF5] px-4 py-2 gap-x-2 flex items-center rounded-full">
                  <div className="w-6">
                    <Image src={Cycling} alt="" />
                  </div>
                  <div className="text-white text-lg medium">
                    {item.category}
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div className="text-2xl bold text-white">{item.name}</div>
                  <div className="text-[#E6E6E6] text-lg medium">
                    {item.title}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-x-1 items-center">
                      <div className="w-4">
                        <Image src={Location} alt="" />
                      </div>
                      <div className="text-[#E6E6E6] text-base medium">
                        {item.location}
                      </div>
                    </div>
                    <div className="flex gap-x-1 items-center">
                      <div className="w-4">
                        <Image src={Star} alt="" />
                      </div>
                      <div className="text-[#E6E6E6] text-base medium">
                        {item.stars}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button>
            <div className="w-12 absolute top-36 right-1 rounded-full border-2 border-[#625df5] inline-flex">
              <Image className="button-bg" src={ArrowRight} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
