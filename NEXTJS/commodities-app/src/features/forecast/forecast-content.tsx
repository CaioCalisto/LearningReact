import React from "react";
import { Bar } from "@/designs";

function ForecastContent() {
  return (
    <div className={"flex-col"}>
      <Bar
        options={[
          { title: "Summary", renderItem: <>Summary</> },
          { title: "Technical Analysis", renderItem: <>Technical Analysis</> },
          { title: "Supply", renderItem: <>Supply</> },
        ]}
      />
    </div>
  );
}

export default ForecastContent;
