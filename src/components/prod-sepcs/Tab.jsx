import React, { useState } from "react";
import { prodSpecContent, tabs } from "../../static/prod-spec";
import clsx from "clsx";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTab, setCurrentTab] = useState("About");

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;

    setIsAnimating(true);

    setTimeout(() => {
      setActiveTab(tab);
      setCurrentTab(tab);
      setIsAnimating(false); // Trigger fade-in animation
    }, 200);
  };

  return (
    <div className="sm:pt-16 pt-9 main-container">
      {/* Tab Navigation */}
      <div className="font-eudoxus sm:text-xl text-sm text-center text-palette-gray">
        <ul className="flex justify-between sm:gap-14 sm:justify-start">
          {tabs.map((tab) => (
            <li key={tab} className="text-nowrap">
              <button
                onClick={() => handleTabChange(tab)}
                className={`inline-block sm:px-0 px-2 py-1 rounded-t-lg ${
                  activeTab === tab
                    ? "text-black border-b-4 border-red-500 font-semibold"
                    : "text-palette-gray font-normal border-b-4 border-transparent hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:pt-6 pt-4 text-gray-700">
        <div
          className={clsx(
            "columns-1 md:columns-2 gap-8 sm:text-base text-sm",
            isAnimating ? "animate-fadeSlideOut" : "animate-fadeSlideIn"
          )}
        >
          <p className="sm:text-base text-sm font-400 font-aspekta text-palette-gray mb-2 sm:mb-0">
            {prodSpecContent[currentTab]?.details}
          </p>
          <ul className="pl-6 text-palette-gray">
            {prodSpecContent[activeTab]?.features?.map((feature, index) => (
              <li
                key={index}
                className="list-disc font-aspekta text-palette-gray mb-1 sm:pt-0.5 pt-2 [&::marker]:!text-[0.7rem]"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
