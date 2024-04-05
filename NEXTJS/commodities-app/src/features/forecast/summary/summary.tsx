import React from "react";
import Chart from "./chart";

type Props = {
  commodityId: string;
};

function Summary({ commodityId }: Props) {
  return (
    <>
      <Chart commodityId={commodityId} />
    </>
  );
}

export default Summary;
