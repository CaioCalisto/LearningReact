"use client";

import HighchartsReact from "highcharts-react-official";
import Highchats from "highcharts";
import React from "react";

const options: Highcharts.Options = {
  title: {
    text: "Overview",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  series: [
    {
      type: "line",
      name: "Product name",
      data: [
        29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
    {
      type: "line",
      name: "Product name 2",
      data: [
        54.4, 95.6, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
        194.1,
      ],
    },
  ],
};

function OverviewChart() {
  return (
    <div>
      <HighchartsReact highcharts={Highchats} options={options} />
    </div>
  );
}

export default OverviewChart;
