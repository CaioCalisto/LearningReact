"use client";

import React, { ReactNode } from "react";
import { Tab, Tabs } from "@nextui-org/react";

type LargeTabsProp = {
  title: string;
  render: ReactNode;
};

type LargeTabsProps = {
  contents: LargeTabsProp[];
};

function LargeTabs({ contents }: LargeTabsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Tabs variant="light" aria-label="Tabs">
        {contents.map((content, index) => (
          <Tab key={`tab-option-${index}`} title={content.title}>
            {content.render}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default LargeTabs;
