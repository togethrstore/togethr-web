import React, { useState } from "react";
import Logo from "../public/assets/images/global/logo.png";
import ArrowDown from "../public/assets/images/arrow-down.png";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownSvg, ArrowDownSvgMob } from "./Buttons";

export default function Headerr() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleButtonClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="w-full flex justify-center items-center pt-8 px-6 lg:px-0 ">
        <div className="w-full flex items-center justify-between gap-y-12 max-w-4xl xl:max-w-7xl">

          <Link href={"/"} className="mx-6">
            <div className="w-24 lg:w-32 cursor-pointer">
              <Image src={Logo} alt="" priority={true} />
            </div>
          </Link>
          
       

        </div>
      </div>
    </>
  );
}
