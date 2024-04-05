import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {
  commodityId: string;
};

export default function Chart({ commodityId }: Props) {
  const options = {
    title: {
      text: `Commodity ${commodityId}`,
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
