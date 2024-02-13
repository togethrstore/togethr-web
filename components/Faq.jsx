import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "../public/assets/images/arrow-down.png";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Togethr?",
    answer:
      "To put it simply, Togethr is your personal shopping assistant. Our experts help you choose the right product and buy it at the best price.",
  },
  {
    question: "What exactly do you do?",
    answer:
      "We have a panel of experts across multiple categories who will walk you through any queries and help you make a purchase. All you have to do is fill out a quick form.",
  },
  {
    question: "Who’s an expert?",
    answer:
      "An expert is a passionate individual who is happy to be your shopping buddy for your next big purchase. They understand your requirements and give you unbiased, personalized buying advice.",
  },
  {
    question: "Is it free?",
    answer: "Yes, you can talk to an expert free of cost, no tricks.",
  },
  {
    question: "Why are you doing this?",
    answer:
      "We believe that modern internet shoppers are plagued with 'too much' information across multiple channels, and influencers. We want to make your shopping experience enjoyable.",
  },
  {
    question: "Can I buy products from Togethr?",
    answer: "Yes, you can!",
  },
  {
    question: "How can I buy from Togethr?",
    answer:
      "Sign up to talk to an expert and they will share purchase links after your conversation.",
  },
  {
    question: "What is a price match guarantee?",
    answer:
      "Whatever product you decide to buy, we will match the price from major online retailers and brands.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleContentVisibility = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full flex justify-center px-6 lg:px-0 py-10 lg:py-16 faq-bg">
        <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-16">
          <div className="flex flex-col gap-y-4">
            <div className="text-black bold text-2xl lg:text-[2.5rem]">
              Frequently asked questions
            </div>
            <div className="flex flex-col pt-4 lg:pt-12 gap-y-4">
              {faqData.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <button onClick={() => toggleContentVisibility(index)}>
                    <div className="w-full flex items-center justify-between pt-4 pb-2">
                      <div className="text-black text-start bold text-xl lg:text-xl">
                        {item.question}
                      </div>
                      <div className="w-5 lg:w-6">
                        <motion.div
                          initial={false}
                          animate={{
                            rotate: openIndex === index ? 180 : 0,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <Image src={ArrowDown} alt="" priority={true} />
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
                        className="medium text-[#51636F] text-base lg:text-lg"
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
