import React, { useState } from "react";
import Image from "next/image";

function getChevronRight() {
  return (
    <Image
      src={"/chevron-right.svg"}
      alt={"Chevron Right Button"}
      width={"0"}
      height={"0"}
      style={{ width: "100%", height: "auto" }}
    />
  );
}

function getChevronLeft() {
  return (
    <Image
      src={"/chevron-left.svg"}
      alt={"Chevron Left Button"}
      width={"0"}
      height={"0"}
      style={{ width: "100%", height: "auto" }}
    />
  );
}

export default function RightSidePanel() {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div className={"flex flex-row"}>
      <div className={"flex flex-col align-top pt-2"}>
        <button
          className={"h-6 w-6 border-2 rounded-l-2xl"}
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          {accordionOpen ? getChevronRight() : getChevronLeft()}
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${accordionOpen ? "grid-cols-[1fr] opacity-100" : "grid-cols-[0fr] opacity-0"}`}
      >
        <div className={"overflow-hidden px-3 py-2 border-2 rounded-t-lg"}>
          This is the Content
        </div>
      </div>
    </div>
  );
}
