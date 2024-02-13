import React, { useState } from "react";
import Image from "next/image";
import HoverButton from "../../public/assets/images/form/button-hover.png";
import Tick from "../../public/assets/images/form/tick.png";
import Close from "../../public/assets/images/form/close-circle.png";
import { motion, AnimatePresence } from "framer-motion";

import axios from "axios";

const categories = [
  {
    id: 6,
    text: "Do you want to talk to an expert?",
    options: ["Yes", "No"],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const TabSix = ({
  nextTab,
  save,
  activeTab,
  tabTwoResponse,
  tabThreeResponse,
  tabFourResponse,
  tabFiveResponse,
}) => {
  const [wantToTalk, setWantToTalk] = useState(null);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleOptionClick = async (item) => {
    if (item === "Yes") {
      setWantToTalk(true);
    } else {
      try {
        const reducedData = {
          price: tabTwoResponse,
          battery: tabThreeResponse,
          camera: tabFourResponse,
          performance: tabFiveResponse,
        };

        const apiUrl = "/api/backend";
        await axios.post(apiUrl, reducedData);

        nextTab();
      } catch (error) {
        console.error("Error posting reduced data:", error);
      }
    }
  };

  const handleNextTab = async () => {
    if (wantToTalk === null) {
      return;
    }

    const dataToPost = {
      price: tabTwoResponse,
      battery: tabThreeResponse,
      camera: tabFourResponse,
      performance: tabFiveResponse,
    };

    if (wantToTalk) {
      if (name.length >= 1 && number.length === 10) {
        dataToPost.name = name;
        dataToPost.number = number;
      } else {
        setIsButtonDisabled(true);

        if (name.length < 1) {
          alert("Please enter your name.");
        } else if (number.length !== 10) {
          alert("Please enter a valid 10-digit phone number.");
        }

        // This will be true only if both conditions are met
        return;
      }
    }

    try {
      const apiUrl = "/api/backend";

      if (wantToTalk) {
        await axios.post(apiUrl, dataToPost);
      } else {
        const reducedData = {
          price: dataToPost.price,
          battery: dataToPost.battery,
          camera: dataToPost.camera,
          performance: dataToPost.performance,
        };
        await axios.post(apiUrl, reducedData);
      }

      nextTab();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "number") {
      const phoneNumber = e.target.value;
      setNumber(phoneNumber.replace(/\D/g, ""));
    }

    setIsButtonDisabled(!(name && number.length === 10));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col gap-y-6 px-6 py-4 lg:px-0 max-w-4xl xl:max-w-7xl">
        {wantToTalk === null && (
          <div>
            {categories.map((category, index) => (
              <div key={index}>
                <div className="bold text-xl lg:text-2xl pb-3">
                  {category.id}. {category.text}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {category.options.map((item, itemIndex) => (
                    <button
                      key={itemIndex}
                      className={`text-[#51636F] bg-white hover:bg-[#625DF533] group hover:text-black flex items-center justify-between text-base lg:text-lg bold p-4 border-[2.5px] border-[#625DF533] hover:border-[#625DF5] text-start rounded-2xl transition-all duration-300 ${
                        wantToTalk === null
                          ? ""
                          : wantToTalk === (item === "Yes")
                          ? "selected"
                          : "unselected"
                      }`}
                      onClick={() => {
                        handleOptionClick(item);
                      }}
                    >
                      <div>{item}</div>
                      <div className="w-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100 inline-flex">
                        <Image src={HoverButton} alt="" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {wantToTalk && (
          <div className="grid grid-cols-1 gap-2 lg:gap-4">
            <AnimatePresence>
              {showConfirm && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="w-full relative max-w-4xl xl:max-w-7xl"
                >
                  <div className="w-full z-50 flex items-center absolute justify-between px-2 py-3 bg-white border-2 rounded-2xl border-[#625DF5]">
                    <div className="flex items-center gap-x-1.5">
                      <div className="w-4 lg:w-6 inline-flex">
                        <Image src={Tick} alt="" />
                      </div>
                      <div className="text-black bold text-base lg:text-xl">
                        Your event has been scheduled
                      </div>
                    </div>
                    <div className="w-4 lg:w-6 inline-flex">
                      <Image src={Close} alt="" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="bold text-xl lg:text-2xl">
              <span>7. </span>
              Enter your contact details{" "}
            </div>
            <div className="text-base lg:text-xl bold hidden lg:block">
              Name
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name here"
              value={name}
              onChange={handleInputChange}
              className="w-full lg:w-1/2 mt-4 lg:mt-0 text-[#51636F] border-[2.5px] border-[#625DF533] p-3.5 lg:p-4 rounded-2xl medium"
            />
            <div className="text-base lg:text-xl bold hidden lg:block">
              Number
            </div>
            <input
              type="text"
              name="number"
              placeholder="Enter your phone number"
              value={number}
              onChange={handleInputChange}
              maxLength="10"
              className="w-full lg:w-1/2 mt-2 lg:mt-0 text-[#51636F] border-[2.5px] border-[#625DF533] p-3.5 lg:p-4 rounded-2xl"
            />

            <button
              className={`w-full lg:w-1/2 mt-4 text-white bg-[#625DF5] hover:bg-[#4C53A5] text-base lg:text-lg bold p-3 lg:p-4 rounded-2xl`}
              onClick={() => {
                handleNextTab();
                // nextTab();
                activeTab === 6;
                setShowConfirm(name.length >= 1 && number.length === 10);
              }}
            >
              Schedule Event
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSix;
