import React from "react";
import Chart from "./chart";
import { Bar, RoundedContainer } from "@/designs";
import KeyData from "@/features/forecast/summary/key-data";

type Props = {
  commodityId: string;
};

function Summary({ commodityId }: Props) {
  return (
    <>
      <Chart commodityId={commodityId} />
      <div className={"md:hidden py-2"}>
        <RoundedContainer>
          <Bar
            options={[
              {
                title: "Key Data",
                renderItem: <KeyData commodityId={commodityId} /> ,
              },
              {
                title: "Targets",
                renderItem: <>Targets Content</>,
              },
            ]}
          />
        </RoundedContainer>
      </div>
    </>
  );
}

export default Summary;
