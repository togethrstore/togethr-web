import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/assets/images/global/color.jpg";
import Instagram from "../public/assets/images/footer/instagram.png";
import Linkedin from "../public/assets/images/footer/linkedin.png";
import InstagramHover from "../public/assets/images/footer/instagram-hover.png";
import LinkedinHover from "../public/assets/images/footer/linkedin-hover.png";
import Link from "next/link";

const categories = [
 
  {
    title: "Togethr",
    items: [
    
      { name: "Join our waitlist", link: "https://u4lncn4kip6.typeform.com/to/F46mmQT5" },
      { name: "Contact Us", link: "/contact-us" },
      { name: "Terms & Conditions", link: "/terms&conditions" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      
    ],
  },
];

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredL, setIsHoveredL] = useState(false);

  return (
    <div className="w-full flex justify-center px-6 lg:px-0 py-10 lg:py-12">
      <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl mx-7">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <Link href={"/"}>
              <div className="w-32 cursor-pointer">
                <Image src={Logo} alt="" priority={true} />
              </div>
            </Link>
            <div className="lg:hidden flex items-center gap-x-4">
              <Link href={"https://www.instagram.com/togethrstore/"}>
                <div
                  className="w-6 h-6 cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={isHovered ? InstagramHover : Instagram}
                    alt=""
                    priority={true}
                  />
                </div>
              </Link>
              <Link
                href={"https://www.linkedin.com/company/togethr-store/about/"}
              >
                <div
                  className="w-6 h-6 cursor-pointer"
                  onMouseEnter={() => setIsHoveredL(true)}
                  onMouseLeave={() => setIsHoveredL(false)}
                >
                  <Image
                    src={isHoveredL ? LinkedinHover : Linkedin}
                    alt=""
                    priority={true}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="py-8 lg:py-12 flex flex-col gap-4 lg:flex-row gap-x-32">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col gap-y-3 lg:gap-y-6">
                <div className="bold text-black text-lg">{category.title}</div>
                <div className="flex flex-col gap-y-2 text-[#51636F] text-base medium">
                  {category.items.map((item, subIndex) => (
                    <div
                      key={subIndex}
                      className="hover:text-[#625DF5] transition-all duration-300"
                    >
                      <Link href={item.link} className="" target="_blank">
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="text-black text-sm lg:text-base regular">
              Copyright © 2024 Togethr. All rights reserved.
            </div>
            <div className="hidden lg:flex items-center gap-x-4">
              <Link href={"https://www.instagram.com/togethrstore/"}>
                <div
                  className="w-6 h-6 cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={isHovered ? InstagramHover : Instagram}
                    alt=""
                    priority={true}
                  />
                </div>
              </Link>
              <Link
                href={"https://www.linkedin.com/company/togethr-store/about/"}
              >
                <div
                  className="w-6 h-6 cursor-pointer"
                  onMouseEnter={() => setIsHoveredL(true)}
                  onMouseLeave={() => setIsHoveredL(false)}
                >
                  <Image
                    src={isHoveredL ? LinkedinHover : Linkedin}
                    alt=""
                    priority={true}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
