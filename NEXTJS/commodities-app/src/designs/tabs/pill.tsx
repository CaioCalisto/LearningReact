import React, { ReactNode } from "react";
import { Typography } from "@/designs";

type TabProps = {
  title: string;
  renderItem: ReactNode;
};

type Props = {
  options: TabProps[];
};

function Pill({ options }: Props) {
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  return (
    <>
      <div className={"flex flex-row gap-3"}>
        {options.map((option, index) => (
          <button
            key={`option-title-${option.title.replace(/\s/g, "")}-${index}`}
            className={"px-4 py-2 rounded-2xl"}
            style={{
              backgroundColor: `var(${index === currentTab ? "--BLUE-30" : "--GRAY-30"})`,
            }}
            onClick={() => {
              handleTabChange(index);
            }}
          >
            <Typography
              style={"body"}
              size={"m"}
              weight={"regular"}
              color={`var(${index === currentTab ? "--GRAY-2" : "--GRAY-100"})`}
            >
              {option.title}
            </Typography>
          </button>
        ))}
      </div>
      {options.map(
        (option, index) =>
          currentTab === index && (
            <div
              key={`option-content-${option.title.replace(/\s/g, "")}-${index}`}
            >
              {option.renderItem}
            </div>
          ),
      )}
    </>
  );
}

export default Pill;
