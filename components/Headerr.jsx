import React, { useState } from "react";
import Logo from "../public/assets/images/global/logo.png";
import ArrowDown from "../public/assets/images/arrow-down.png";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      <div className="w-full flex justify-center items-center pt-8 px-6 lg:px-0">
        <div className="w-full flex items-center justify-between gap-y-12 max-w-4xl xl:max-w-7xl">
          <Link href={"/"}>
            <div className="w-24 lg:w-32 cursor-pointer">
              <Image src={Logo} alt="" priority={true} />
            </div>
          </Link>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <div className="relative z-10">
              <AnimatePresence>
                {openIndex === 0 && (
                  <motion.div
                    className="w-max flex flex-col p-3 lg:p-4 dropdown-box absolute right-0 top-8 lg:top-10"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                  >
                    <Link href={"https://u4lncn4kip6.typeform.com/to/PVf62CCJ"}>
                      <motion.button className="text-black hover:text-[#625DF5] transition-all duration-300 medium text-base lg:text-lg inline-flex">
                        Laptops
                      </motion.button>
                    </Link>

                    <motion.div className="bg-[#625df533] h-[1px] my-1"></motion.div>
                    <Link href={"https://u4lncn4kip6.typeform.com/to/PVf62CCJ"}>
                      <motion.button className="text-black hover:text-[#625DF5] transition-all duration-300 medium text-base lg:text-lg inline-flex">
                        Phones
                      </motion.button>
                    </Link>

                    <motion.div className="bg-[#625df533] h-[1px] my-1"></motion.div>
                    <Link href={"https://u4lncn4kip6.typeform.com/to/PVf62CCJ"}>
                      <motion.button className="text-black hover:text-[#625DF5] transition-all duration-300 medium text-base lg:text-lg inline-flex">
                        Headphones
                      </motion.button>
                    </Link>

                    <motion.div className="bg-[#625df533] h-[1px] my-1"></motion.div>
                    <Link href={"https://u4lncn4kip6.typeform.com/to/PVf62CCJ"}>
                      <motion.button className="text-black hover:text-[#625DF5] transition-all duration-300 medium text-base lg:text-lg inline-flex lg:pr-2">
                        Smart Watches
                      </motion.button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className="flex items-center gap-x-1"
                onClick={() => handleButtonClick(0)}
              >
                <div className="text-base lg:text-lg medium"> Electronics</div>
                <div className="w-[18px] lg:w-6 inline-flex">
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: openIndex === 0 ? 180 : 0,
                      transition: { duration: 0.3 },
                    }}
                    className="inline-flex"
                  >
                    <Image src={ArrowDown} alt="" />
                  </motion.div>{" "}
                </div>
              </button>
            </div>
            {/* shdahsfhkashf */}

            <div className="relative z-10">
              <AnimatePresence>
                {openIndex === 1 && (
                  <motion.div
                    className="w-max flex flex-col p-2 pr-10 lg:p-2.5 lg:pl-4 lg:pr-16 dropdown-box absolute right-0 top-8 lg:top-10"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                  >
                    <Link href={"https://u4lncn4kip6.typeform.com/to/PVf62CCJ"}>
                      <motion.button className="text-black hover:text-[#625DF5] transition-all duration-300 medium text-base lg:text-lg inline-flex">
                        Cycling
                      </motion.button>
                    </Link>

                    {/* <motion.div className="bg-[#625df533] h-[1px] my-1"></motion.div>
                    <motion.button className="text-black medium text-sm lg:text-lg inline-flex">
                      Phones
                    </motion.button>
                    <motion.div className="bg-[#625df533] h-[1px] my-1"></motion.div>
                    <motion.button className="text-black medium text-sm lg:text-lg inline-flex">
                      Headphones
                    </motion.button>
                    <motion.div className="bg-[#625df533] h-[1px] my-1"></motion.div>
                    <motion.button className="text-black medium text-sm lg:text-lg inline-flex lg:pr-2">
                      Smart Watches
                    </motion.button> */}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className="flex items-center gap-x-1"
                onClick={() => handleButtonClick(1)}
              >
                <div className="text-base lg:text-lg medium"> Sports</div>
                <div className="w-[18px] lg:w-6 inline-flex">
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: openIndex === 1 ? 180 : 0,
                      transition: { duration: 0.3 },
                    }}
                    className="inline-flex"
                  >
                    <Image src={ArrowDown} alt="" />
                  </motion.div>{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
