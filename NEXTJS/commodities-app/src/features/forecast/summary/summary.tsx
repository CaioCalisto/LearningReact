import React from "react";
import Chart from "./chart";
import { Bar, RoundedContainer } from "@/designs";

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
                renderItem: <>Key Data Content</>,
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
