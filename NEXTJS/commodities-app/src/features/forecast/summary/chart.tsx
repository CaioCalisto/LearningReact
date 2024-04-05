import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useChart from "./useChart";
import { Bar, FilterButton, RightSidePanel, RoundedContainer } from "@/designs";

type Props = {
  commodityId: string;
};

export default function Chart({ commodityId }: Props) {
  const { options } = useChart(commodityId);

  return (
    <div className={"flex flex-col gap-3"}>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className={"flex flex-row gap-3"}>
        <FilterButton>6M</FilterButton>
        <FilterButton>1Y</FilterButton>
        <FilterButton>3Y</FilterButton>
        <FilterButton>5Y</FilterButton>
        <FilterButton>All</FilterButton>
      </div>
      <div className={"md:hidden"}>
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
    </div>
  );
}
