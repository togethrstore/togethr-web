import React from "react";
import Image from "next/image";
import Cycling from "../public/assets/images/carousel/cycling.png";
import Location from "../public/assets/images/carousel/location.png";
import Star from "../public/assets/images/carousel/star.png";
import Background from "../public/assets/images/carousel/example.png";
import ArrowLeft from "../public/assets/images/carousel/arrow-left.png";
import ArrowRight from "../public/assets/images/carousel/arrow-right.png";
import ExpertOne from "../public/assets/images/carousel/expert-1.png";
import ExpertTwo from "../public/assets/images/carousel/expert-2.png";
import ExpertThree from "../public/assets/images/carousel/expert-3.png";
import ExpertFour from "../public/assets/images/carousel/expert-4.png";
import Link from "next/link";

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
    <div className="w-full hidden lg:flex justify-center faq-bg">
      <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-16">
        <div className="flex flex-col gap-y-4">
        
        </div>
     
     

      
      </div>
    </div>
  );
};

export default Carousel;
