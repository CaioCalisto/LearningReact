import React from "react";
import Chart from "./chart";
import { Bar, RoundedContainer } from "@/designs";
import KeyData from "./key-data";
import Pyramid from "./pyramid";
import Detail from "./detail";

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
                renderItem: <KeyData commodityId={commodityId} />,
              },
              {
                title: "Targets",
                renderItem: <>Targets Content</>,
              },
            ]}
          />
        </RoundedContainer>
      </div>
      <br />
      <hr />
      <div className={"grid md:grid-cols-2 gap-8"}>
        <Detail commodityId={commodityId} />
        <Pyramid />
      </div>
    </>
  );
}

export default Summary;
