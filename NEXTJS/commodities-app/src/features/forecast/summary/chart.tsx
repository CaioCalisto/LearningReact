import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useChart from "./useChart";
import { FilterButton } from "@/designs";
import RangeSelectButton from "@/designs/buttons/range-select-button";

type Props = {
  commodityId: string;
};

export default function Chart({ commodityId }: Props) {
  const { options } = useChart(commodityId);

  return (
    <div className={"flex flex-col gap-3"}>
      <HighchartsReact highcharts={Highcharts} options={options} />
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
