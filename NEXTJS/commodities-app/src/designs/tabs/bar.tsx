import React from "react";
import { TabProps } from "./tab-props";
import { Typography } from "@/designs";

function Bar({ options }: TabProps) {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"flex flex-row gap-3"}>
        {options.map((option, index) => (
          <button
            key={`option-bar-title-${option.title.replace(/\s/g, "")}-${index}`}
            className={"px-5 py-3 border-b-2"}
            style={{ borderColor: `${currentTab === index ? 'var(--BLUE-50)' : 'var(--GRAY-40)'}`}}
            onClick={() => {
              handleTabChange(index);
            }}
          >
            <Typography style={"body"} size={"s"} weight={`${currentTab === index ? 'bold': 'regular'}`}>
              {option.title}
            </Typography>
          </button>
        ))}
      </div>
      {options.map(
        (option, index) =>
          currentTab === index && (
            <div
              key={`option-bar-content-${option.title.replace(/\s/g, "")}-${index}`}
            >
              {option.renderItem}
            </div>
          ),
      )}
    </div>
  );
}

export default Bar;
