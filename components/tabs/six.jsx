import React, { useState } from "react";
import Image from "next/image";
import HoverButton from "../../public/assets/images/form/button-hover.png";
import axios from "axios";

const categories = [
  {
    id: 6,
    text: "Do you want to talk to an expert?",
    options: ["Yes", "No"],
  },
];

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

  const handleOptionClick = (item) => {
    if (item === "Yes") {
      setWantToTalk(true);
    } else {
      setWantToTalk(false);
      nextTab();
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
      if (name && number.length === 10) {
        dataToPost.name = name;
        dataToPost.number = number;
      } else {
        setIsButtonDisabled(true);

        if (!name) {
          alert("Please enter your name.");
        } else if (number.length !== 10) {
          alert("Please enter a valid 10-digit phone number.");
          return; // Don't proceed if the input is invalid
        }
      }
    }

    try {
      // Adjust the URL based on your backend API endpoint
      const apiUrl = "/api/backend";

      if (wantToTalk) {
        // Case 2: Now send all button is clicked
        await axios.post(apiUrl, dataToPost);
      } else {
        // Case 1: No is clicked
        // Send only 4 data
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
      // Handle error as needed
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
      <div className="w-full flex flex-col gap-y-6 px-6 py-10 lg:px-0 max-w-4xl xl:max-w-7xl lg:py-16">
        <div className="text-[#51636F] text-lg lg:text-xl medium">
          Your responses will be recorded here
        </div>

        {wantToTalk === null && (
          <div>
            <div className="bold text-xl lg:text-2xl">
              <span>6. </span>
              Do you want to talk to an expert?{" "}
            </div>
            {categories.map((category, index) => (
              <div key={index}>
                <div className="bold text-xl lg:text-2xl pb-3">
                  {category.text}
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
                      {wantToTalk !== null && item === "Yes" && (
                        <div className="w-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100 inline-flex">
                          <Image src={HoverButton} alt="" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {wantToTalk && (
          <div className="grid grid-cols-1 gap-4">
            <div className="bold text-xl lg:text-2xl">
              <span>7. </span>
              Enter your contact details{" "}
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
              className="text-[#51636F] border-[2.5px] border-[#625DF533] p-4 rounded-2xl"
            />
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={number}
              onChange={handleInputChange}
              maxLength="10"
              className="text-[#51636F] border-[2.5px] border-[#625DF533] p-4 rounded-2xl"
            />

            <button
              className={`text-white bg-[#625DF5] hover:bg-[#4C53A5] text-base lg:text-lg bold p-4 rounded-2xl`}
              onClick={() => {
                handleNextTab();
                nextTab();
                activeTab === 6;
              }}
            >
              Now send all
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSix;
