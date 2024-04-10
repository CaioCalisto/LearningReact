import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useChart from "./useChart";
import { Bar, FilterButton, RightSidePanel } from "@/designs";
import RangeSelectButton from "@/designs/buttons/range-select-button";
import KeyData from "@/features/forecast/summary/key-data";

type Props = {
  commodityId: string;
};

export default function Chart({ commodityId }: Props) {
  const { options } = useChart(commodityId);

  return (
    <div className={"flex flex-col gap-3"}>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className={"absolute right-0 hidden md:block"}>
        <RightSidePanel>
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
        </RightSidePanel>
      </div>
      <div className={"flex flex-row gap-3 flex-wrap justify-center"}>
        <FilterButton>6M</FilterButton>
        <FilterButton>1Y</FilterButton>
        <FilterButton>3Y</FilterButton>
        <FilterButton>5Y</FilterButton>
        <FilterButton>All</FilterButton>
        <RangeSelectButton />
      </div>
    </div>
  );
}
