import React, { useState } from "react";
import { prodSpecContent, tabs } from "../../static/prod-spec";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div>
      {/* Tab Navigation */}
      <div className="text-sm font-medium text-center text-gray-500">
        <ul className="flex -mb-px gap-6 sm:gap-14">
          {tabs.map((tab) => (
            <li key={tab} className="text-nowrap">
              <button
                onClick={() => setActiveTab(tab)}
                className={`inline-block sm:p-4 p-[11px] rounded-t-lg ${
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
      <div className="pt-6 text-gray-700">
        <div className="columns-1 md:columns-2 gap-8">
          <p>{prodSpecContent[activeTab]?.details}</p>
          <ul className="list-disc pl-6 text-gray-700">
            {prodSpecContent[activeTab]?.features?.map((feature, index) => (
              <li key={index} className="mb-2">
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
