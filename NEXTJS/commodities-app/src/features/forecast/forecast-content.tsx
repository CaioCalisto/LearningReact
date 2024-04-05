import React from "react";
import { Bar } from "@/designs";
import Summary from "./summary/summary";

type Props = {
  commodityId: string;
};

function ForecastContent({ commodityId }: Props) {
  return (
    <div className={"flex-col"}>
      <Bar
        options={[
          { title: "Summary", renderItem: <Summary commodityId={commodityId} /> },
          { title: "Technical Analysis", renderItem: <>Technical Analysis</> },
          { title: "Key Fundamentals", renderItem: <>Key Fundamentals</> },
          { title: "Supply", renderItem: <>Supply</> },
          { title: "Demand", renderItem: <>Demand</> },
          { title: "S/D balance", renderItem: <>S/D balance</> },
          { title: "Inventory", renderItem: <>Inventory</> },
          { title: "Cost Drivers", renderItem: <>Cost Drivers</> },
          { title: "Market Watch", renderItem: <>Market Watch</> },
        ]}
      />
    </div>
  );
}

export default ForecastContent;
