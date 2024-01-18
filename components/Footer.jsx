import React from "react";
import Image from "next/image";
import Logo from "../public/assets/images/global/logo.png";
import Instagram from "../public/assets/images/footer/instagram.png";
import Linkedin from "../public/assets/images/footer/linkedin.png";
import Link from "next/link";

const categories = [
  {
    title: "Electronics",
    items: [
      { name: "Laptops", link: "/laptops" },
      { name: "Phones", link: "/phones" },
    ],
  },
  {
    title: "Sports & Hobbies",
    items: [{ name: "Bicycles", link: "/bicycles" }],
  },
  {
    title: "Togethr",
    items: [
      { name: "About Us", link: "/bicycles" },
      { name: "Become an expert", link: "/bicycles" },
      { name: "Contact Us", link: "/bicycles" },
      { name: "Terms & Condition", link: "/bicycles" },
      { name: "Privacy Policy", link: "/bicycles" },
      { name: "Cancellation & Refund Policy", link: "/bicycles" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full flex justify-center px-6 lg:px-0 py-10 lg:py-12">
      <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="w-32">
              <Image src={Logo} alt="" />
            </div>
            <div className="lg:hidden flex items-center gap-x-4">
              <Link href={""}>
                <div className="w-6 h-6 cursor-pointer">
                  <Image src={Instagram} alt="" />
                </div>
              </Link>
              <Link href={""}>
                <div className="w-6 h-6 cursor-pointer">
                  <Image src={Linkedin} alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="py-12 flex flex-col gap-4 lg:flex-row gap-x-32">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col gap-y-3 lg:gap-y-6">
                <div className="bold text-black text-lg">{category.title}</div>
                <div className="flex flex-col gap-y-2 text-[#51636F] text-base medium">
                  {category.items.map((item, subIndex) => (
                    <Link key={subIndex} href={item.link} className="">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="text-black text-base medium">
              Copyright © 2023 Togethr. All rights reserved.
            </div>
            <div className="hidden lg:flex items-center gap-x-4">
              <Link href={""}>
                <div className="w-6 h-6 cursor-pointer">
                  <Image src={Instagram} alt="" />
                </div>
              </Link>
              <Link href={""}>
                <div className="w-6 h-6 cursor-pointer">
                  <Image src={Linkedin} alt="" />
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
