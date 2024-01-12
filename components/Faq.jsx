import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "../public/assets/images/arrow-down.png";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Togethr?",
    answer: "Lorem Ipsum dos amet. Lorem Ipsum dos amet. Lorem Ipsum dos amet.",
  },
  {
    question: "What is Togethr?",
    answer: "Lorem Ipsum dos amet. Lorem Ipsum dos amet. Lorem Ipsum dos amet.",
  },
  // Add more question-answer pairs as needed
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleContentVisibility = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-16">
          <div className="flex flex-col gap-y-4">
            <div className="text-black bold text-[2.5rem]">
              Frequently asked questions
            </div>
            <div className="flex flex-col pt-12 gap-y-4">
              {faqData.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <button onClick={() => toggleContentVisibility(index)}>
                    <div className="w-full flex justify-between">
                      <div className="text-black bold text-xl">
                        {item.question}
                      </div>
                      <div className="w-6">
                        <motion.div
                          initial={false}
                          animate={{
                            rotate: openIndex === index ? 180 : 0,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <Image src={ArrowDown} alt="" />
                        </motion.div>
                      </div>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="regular text-[#51636F] text-lg pt-4"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="w-full bg-[#625DF5] h-0.5 mt-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
