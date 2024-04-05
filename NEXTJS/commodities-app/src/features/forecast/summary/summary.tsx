import React from "react";
import Chart from "./chart";

type Props = {
  commodityId: string;
};

function Summary({ commodityId }: Props) {
  return (
      <>
        <div>Summary for {commodityId}</div>
        <Chart />
      </>
  );
}

export default Summary;
