import React, { useState } from "react";
import { Rating, LeftButton, RightButton } from "./Buttons";
import { motion, AnimatePresence } from "framer-motion";

const reviewData = [
  {
    expert: " Shelby Martin",
    reviewer: " Brandon W",
    ratings: [1, 2, 3, 4, 5],
    title: "Elizabeth was great - very trustworthy!",
    description:
      "Elizabeth was quick and knew exactly what I wanted when I needed some new hiking shoes. She found the best deal for me and was very friendly! 100% who you need to talk to for all of your gear needs. Expect great conversation and detailed recommendations when chatting with Elizabeth.",
    date: "Oct 6, 2023",
  },
  {
    expert: " Vishnu Bhupathi",
    reviewer: "Overachiever L",
    ratings: [1, 2, 3, 4],
    title: "Electronics is a branch of physics and engineering",
    description:
      "Electronics is a branch of physics and engineering that involves the study and manipulation of electrical currents to process, transmit, and store information. It encompasses the design, analysis, and application of electronic circuits and devices, playing a pivotal role in technology, telecommunications, and countless aspects of modern life.",
    date: "Oct 6, 2023",
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

const Card = ({ review }) => {
  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="w-full"
    >
      <motion.div className="w-full p-6 flex flex-col border-2 border-[#625DF5] rounded-2xl testi-bg">
        <div className="w-full flex justify-between">
          <div className="flex items-center h-max gap-x-4">
            <div className="w-14 h-14 bg-[#625DF5] border border-[#625DF5] rounded-full"></div>
            <div className="flex flex-col gap-y-1">
              <div className="bold text-lg text-black">
                Expert:
                <span className="medium text-[#51636F] text-lg">
                  {review.expert}
                </span>
              </div>
              <div className="bold text-lg text-black">
                Reviewer:
                <span className="medium text-[#51636F] text-lg">
                  {review.reviewer}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-0.5">
            {review.ratings.map((rating, index) => (
              <Rating key={index} />
            ))}
          </div>
        </div>
        <div className="w-full bg-[#625DF5] h-[2px] my-6 rounded-2xl"></div>
        <div className="flex flex-col gap-y-6">
          <div className="bold text-xl text-black">{review.title}</div>
          <div className="medium text-[#51636F] text-lg">
            {review.description}
          </div>
          <div className="medium text-[#625DF5] text-lg">
            Verified Review I Submitted on {review.date}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-y-12 max-w-4xl xl:max-w-7xl py-16">
        <div className="flex flex-col gap-y-4">
          <div className="text-black bold text-[2.5rem]">We are Togethr</div>
          <div className="regular text-[#51636F] text-lg">
            Lorem Ipsum dos amasfasfet. Lorem Ipsum dos amet. Lorem Ipsum dos
            amet.
          </div>
        </div>
        <div className="flex justify-center">
          {reviewData.map((review, index) => (
            <div
              className="max-w-4xl xl:max-w-7xl"
              style={{ position: "absolute" }}
              key={index}
              
            >
              <AnimatePresence initial={false} custom={direction}>
                {page % reviewData.length === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Card review={review} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center gap-x-6 mt-80">
          <button onClick={() => paginate(-1)}>
            <LeftButton />
          </button>
          <button onClick={() => paginate(+1)}>
            <RightButton />
          </button>
        </div>
      </div>
    </div>
  );
}
