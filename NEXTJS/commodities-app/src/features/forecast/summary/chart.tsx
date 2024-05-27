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
  const { options, changeZoom } = useChart(commodityId);

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
        <FilterButton onClick={() => changeZoom(0, 6)}>6M</FilterButton>
        <FilterButton onClick={() => changeZoom(0, 12)}>1Y</FilterButton>
        <FilterButton onClick={() => changeZoom(0, 36)}>3Y</FilterButton>
        <FilterButton onClick={() => changeZoom(0, 60)}>5Y</FilterButton>
        <FilterButton onClick={() => changeZoom(0, 1200)}>All</FilterButton>
        <RangeSelectButton />
      </div>
    </div>
  );
}
