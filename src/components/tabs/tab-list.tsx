"use client"

import React, { ReactElement, useState } from "react";

import { sanitizeForId } from "@/lib/utils";
import { TabItemProps, TabListProps } from "@/types/TabTypes";
import { Separator } from "../ui/separator";
import TabItem from "./tab-item";
import "./tabs.css";

const TabList: React.FC<TabListProps> = ({ children, activeTabIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabItemProps> => React.isValidElement(child) && child.type === TabItem
  );

  return (
    <div className="tabs">
      <nav className="tab-nav">
        <ul className="tab-list" role="tablist" aria-orientation="horizontal">
          {tabs.map((tab, index) => (
            <li key={`tab-${index}`}>
              <button
                key={`tab-btn-${index}`}
                role="tab"
                id={`tab-${sanitizeForId(tab.props.label)}`}
                aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
                aria-selected={activeTab === index}
                onClick={() => handleTabClick(index)}
                className={`tab-btn ${activeTab === index && "tab-btn--active"}`}>
                {tab.props.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <Separator className="h-[1.5px] top-[-17px] left-[-150px] relative my-4 bg-[#E6E8EB] z-[-1]" />
      {tabs[activeTab]}
    </div>
  );
};

export default TabList;
