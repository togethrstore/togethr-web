import React, { useState } from "react";
import Image from "next/image";
import TabOne from "./one";
import TabTwo from "./two";
import TabThree from "./three";
import TabFour from "./four";
import TabFive from "./five";
import TabSix from "./six";
import Filtering from "../Phones";
import EditIcon from "../../public/assets/images/form/edit.png";
import Headerr from "../Headerr";

export default function TabIndex() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabOneResponse, setTabOneResponse] = useState(null);
  const [tabTwoResponse, setTabTwoResponse] = useState(null);
  const [tabThreeResponse, setTabThreeResponse] = useState(null);
  const [tabFourResponse, setTabFourResponse] = useState(null);
  const [tabFiveResponse, setTabFiveResponse] = useState(null);
  const [tabSixResponse, setTabSixResponse] = useState(null);

  const nextTab = () => {
    const newTabIndex = setActiveTab(activeTab + 1);
  };

  const progressBarWidth = `${15 + activeTab * 15}%`;

  console.log(tabOneResponse);
  console.log(tabTwoResponse);
  console.log(tabThreeResponse);
  console.log(tabFourResponse);
  console.log(tabFiveResponse);
  console.log(tabSixResponse);

  const responseStates = [
    { index: 0, response: tabOneResponse },
    { index: 1, response: tabTwoResponse },
    { index: 2, response: tabThreeResponse },
    { index: 3, response: tabFourResponse },
    { index: 4, response: tabFiveResponse },
    { index: 5, response: tabSixResponse },
    { index: 6, response: tabSixResponse },
  ];

  const handleButtonClick = (index) => {
    setActiveTab(index);
    responseStates.splice(index + 1);
  };
  return (
    <>
      <Headerr />
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col gap-y-6 pt-6 lg:pt-10 px-6 lg:px-0 max-w-4xl xl:max-w-7xl">
          {activeTab === 0 && (
            <div className="text-[#51636F] text-lg lg:text-xl medium">
              Your responses will be recorded here
            </div>
          )}
          {activeTab > 0 && activeTab < 6 && (
            <div className="flex gap-x-4 overflow-auto">
              {responseStates.map((state) => (
                <div key={state.index}>
                  {state.response && (
                    <button onClick={() => handleButtonClick(state.index)}>
                      <div className="w-max flex items-center gap-x-2 px-4 py-2.5 border-2 border-[#51636F] rounded-2xl bold">
                        <div>{state.response}</div>
                        <div className="lg:w-5 inline-flex">
                          <Image className="" src={EditIcon} alt="" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
          {activeTab >= 0 && activeTab < 6 && (
            <div className="w-full h-1 bg-[#625DF51A] rounded-full">
              <div
                className="bg-[#625DF5] h-1 rounded-full"
                style={{
                  width: progressBarWidth,
                  transition: "width 0.5s ease",
                }}
              ></div>{" "}
            </div>
          )}
        </div>
      </div>
      <div>
        {activeTab === 0 && (
          <TabOne save={setTabOneResponse} nextTab={nextTab} />
        )}
        {activeTab === 1 && (
          <TabTwo save={setTabTwoResponse} nextTab={nextTab} />
        )}
        {activeTab === 2 && (
          <TabThree save={setTabThreeResponse} nextTab={nextTab} />
        )}
        {activeTab === 3 && (
          <TabFour save={setTabFourResponse} nextTab={nextTab} />
        )}
        {activeTab === 4 && (
          <TabFive save={setTabFiveResponse} nextTab={nextTab} />
        )}
        {activeTab === 5 && (
          <TabSix
            activeTab={activeTab}
            save={setTabSixResponse}
            nextTab={nextTab}
            tabTwoResponse={tabTwoResponse}
            tabThreeResponse={tabThreeResponse}
            tabFourResponse={tabFourResponse}
            tabFiveResponse={tabFiveResponse}
          />
        )}
        {activeTab === 6 && (
          <Filtering
            tabTwoResponse={tabTwoResponse}
            tabThreeResponse={tabThreeResponse}
            tabFourResponse={tabFourResponse}
            tabFiveResponse={tabFiveResponse}
          />
        )}
      </div>
    </>
  );
}
