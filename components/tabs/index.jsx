import React, { useState } from "react";
import TabOne from "./one";
import TabTwo from "./two";
import TabThree from "./three";
import TabFour from "./four";
import TabFive from "./five";
import TabSix from "./six";
import Filtering from "../Phones";

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

  console.log(tabOneResponse);
  console.log(tabTwoResponse);
  console.log(tabThreeResponse);
  console.log(tabFourResponse);
  console.log(tabFiveResponse);
  console.log(tabSixResponse);
  return (
    <div>
      {activeTab === 0 && <TabOne save={setTabOneResponse} nextTab={nextTab} />}
      {activeTab === 1 && <TabTwo save={setTabTwoResponse} nextTab={nextTab} />}
      {activeTab === 2 && (
        <TabThree save={setTabThreeResponse} nextTab={nextTab} />
      )}
      {activeTab === 3 && (
        <TabFour save={setTabFourResponse} nextTab={nextTab} />
      )}
      {activeTab === 4 && (
        <TabFive save={setTabFiveResponse} nextTab={nextTab} />
      )}
      {activeTab === 5 && <TabSix save={setTabSixResponse} nextTab={nextTab} />}
      {activeTab === 6 && (
        <Filtering
          tabTwoResponse={tabTwoResponse}
          tabThreeResponse={tabThreeResponse}
          tabFourResponse={tabFourResponse}
          tabFiveResponse={tabFiveResponse}
        />
      )}
    </div>
  );
}
