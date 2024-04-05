import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useChart from "@/features/forecast/summary/useChart";

type Props = {
  commodityId: string;
};

export default function Chart({ commodityId }: Props) {
  const { options } = useChart(commodityId);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
