import React, { useState } from "react";
import { prodSpecContent, tabs } from "../../static/prod-spec";
import clsx from "clsx";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTab, setCurrentTab] = useState("About");

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;

    // Trigger fade-out animation
    setIsAnimating(true);

    setTimeout(() => {
      // Switch tab after fade-out is complete
      setActiveTab(tab);
      setCurrentTab(tab);
      setIsAnimating(false); // Trigger fade-in animation
    }, 200); // Match the duration of the fade-out animation
  };

  return (
    <div className="sm:pt-16 pt-9">
      {/* Tab Navigation */}
      <div className="text-sm font-medium text-center text-gray-500">
        <ul className="flex -mb-px justify-between sm:gap-14 sm:justify-start">
          {tabs.map((tab) => (
            <li key={tab} className="text-nowrap">
              <button
                onClick={() => handleTabChange(tab)}
                className={`inline-block sm:p-4 px-2.5 py-1 rounded-t-lg ${
                  activeTab === tab
                    ? "text-black border-b-4 border-red-500 font-semibold"
                    : "text-gray-500 border-b-4 border-transparent hover:text-gray-700 hover:border-gray-300"
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
          <p className="mb-2 sm:mb-0">{prodSpecContent[currentTab]?.details}</p>
          <ul className="list-disc pl-6 text-gray-700">
            {prodSpecContent[activeTab]?.features?.map((feature, index) => (
              <li key={index} className="mb-2 sm:pt-0.5 pt-2">
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
