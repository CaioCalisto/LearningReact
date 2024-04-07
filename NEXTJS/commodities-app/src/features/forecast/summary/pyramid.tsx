import React from "react";

type PyramidArea = {
  path: string;
  colour: string;
  label: string;
};

function getPyramidElements(): PyramidArea[] {
  return [
    {
      path: "M206.5 128L276.406 13.4531C280.225 7.19557 289.256 7.03798 293.291 13.1585L369 128H206.5Z",
      label: "Forecast",
      colour: "var(--GREEN-60)",
    },
    {
      path: "M288 130H205L136 240H288V130Z",
      label: "Macro",
      colour: "var(--RED-60)",
    },
    {
      path: "M290 130H369.648L442 240H290V130Z",
      label: "Technical Analysis",
      colour: "var(--RED-60)",
    },
    {
      path: "M287.5 242H135.5L67 352H287.5V242Z",
      label: "Key Fundamentals",
      colour: "var(--RED-60)",
    },
    {
      path: "M290 242H443.471L515.5 352H290V242Z",
      label: "Supply/ Demand",
      colour: "var(--AMBER-60)",
    },
    {
      path: "M121.5 354H66L0 461H144L121.5 354Z",
      label: "Cost Drivers",
      colour: "var(--GRAY-60)",
    },
    {
      path: "M124 354H240.001L217.432 461.18H146.568L124 354Z",
      label: "Inventory",
      colour: "var(--RED-60)",
    },
    {
      path: "M242.568 354H320.955L343.523 461.18H220L242.568 354Z",
      label: "Market Watch",
      colour: "var(--RED-60)",
    },
    {
      path: "M323 354H439L423.5 461.18L345.568 461.18L323 354Z",
      label: "Supply",
      colour: "var(--RED-60)",
    },
    {
      path: "M440.901 354H517.495L587.5 461H426L440.901 354Z",
      label: "Demand",
      colour: "var(--RED-60)",
    },
  ];
}

export default function Pyramid() {
  return (
    <div className={""}>
      <svg
        key="pyramid"
        className="overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 470"
      >
        {getPyramidElements().map((element, index) => (
          <path
            key={`pyramid-element-${index}`}
            d={element.path}
            fill={element.colour}
          />
        ))}
      </svg>
    </div>
  );
}
