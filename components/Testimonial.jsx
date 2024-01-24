import React, { useState } from "react";
import { Rating, LeftButton, RightButton, RatingMob } from "./Buttons";
import { motion, AnimatePresence } from "framer-motion";

// reviewer: " Brandon W",
// title: "Elizabeth was great - very trustworthy!",

const reviewData = [
  {
    expert: "Manas Saraswat",
    ratings: [1, 2, 3, 4, 5],
    description:
      "I truly appreciate the time and effort you invested in understanding my needs and providing me with the advice I needed. Your support has been instrumental in making this important decision, and I couldn't be happier with the laptop I now have.",
    date: "I Submitted 3 weeks ago",
  },
  {
    expert: "Abir Mondal",
    ratings: [1, 2, 3, 4, 5],
    description:
      "I truly appreciate the time and effort you invested in understanding my needs and providing me with the advice I needed. Your support has been instrumental in making this important decision, and I couldn't be happier with the laptop I now have.",
    date: "I Submitted 2 months ago",
  },
  {
    expert: "Mithin Kumar",
    ratings: [1, 2, 3, 4, 5],
    description: "Enquiry here before buying anything new. Thank me later",
    date: "I Submitted 2 months ago",
  },
  {
    expert: "Akash Gupta",
    ratings: [1, 2, 3, 4, 5],
    description:
      "The expert from Togethr really helped me in narrowing down my choices and understanding pros and limitations of each mobile phone. Would recommend everyone to try.",
    date: "I Submitted a months ago",
  },
  {
    expert: "Paras Chawla",
    ratings: [1, 2, 3, 4, 5],
    description:
      "Excellent review shared by Togethr team. I wanted a quick opinion to buy phone and Kaivalya attested my research which gave me confidence to buy it right away. Highly recommended to talk to them before purchasing any expensive item.",
    date: "I Submitted 2 months ago",
  },
  {
    expert: "Harshil Jain",
    ratings: [1, 2, 3, 4, 5],
    description:
      "Wonderful experience! I got a cycle expert to contact within an hour and he recommended me the cycle according to my needs just like a friend. This was a really nice interaction with Togethr store and I would recommend anyone trying to buy a bicycle to atleast get in touch with one of the professionals here",
    date: "I Submitted 2 weeks ago",
  },
];

// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 100 : -100,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: 0,
//       opacity: 0,
//     };
//   },
// };

const Card = ({ review }) => {
  return (
    <motion.div
      // variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="w-full px-6 lg:px-0"
    >
      <motion.div className="w-full p-6 flex flex-col border-2 border-[#625DF5] rounded-2xl testi-bg">
        <div className="w-full flex flex-col lg:items-center lg:flex-row lg:justify-between">
          <div className="flex items-center h-max gap-x-4">
            <div className="w-14 h-14 bg-[#625DF5] border border-[#625DF5] rounded-full"></div>
            <div className="flex flex-col">
              <div className="bold text-xl lg:text-2xl text-black">
                {review.expert}{" "}
              </div>
              <div className="flex lg:hidden gap-0.5 mt-2 lg:my-0">
                {review.ratings.map((rating, index) => (
                  <RatingMob key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex gap-0.5 mt-4 lg:my-0">
            {review.ratings.map((rating, index) => (
              <Rating key={index} />
            ))}
          </div>
        </div>
        <div className="w-full bg-[#625DF5] h-[2px] my-4 lg:my-6 rounded-2xl"></div>
        <div className="flex flex-col gap-y-3 lg:gap-y-6">
          {/* <div className="bold text-xl text-black">{review.title}</div> */}
          <div className="medium text-[#51636F] text-lg">
            {review.description}
          </div>
          <div className="medium text-[#625DF5] text-base lg:text-lg">
            Verified Review {review.date}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Testimonial() {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection) => {
    const nextPage =
      (page + newDirection + reviewData.length) % reviewData.length;
    setPage([nextPage, newDirection]);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col gap-y-6 lg:gap-y-12 max-w-4xl px-6 lg:px-0 xl:max-w-7xl py-10 lg:py-16">
        <div className="flex flex-col gap-y-4">
          <div className="text-black bold text-2xl lg:text-[2.5rem]">
            We are Togethr
          </div>
          <div className="medium text-[#51636F] text-base lg:text-lg">
            Talk to real experts and buy authentic products at best prices.
          </div>
        </div>
        <div className="flex justify-center">
          {reviewData.map((review, index) => (
            <div
              className="w-full max-w-4xl xl:max-w-7xl"
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
                    transition={{ duration: 0.6 }}
                  >
                    <Card review={review} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center gap-x-6 mt-[29rem] md:mt-80 lg:mt-80">
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
