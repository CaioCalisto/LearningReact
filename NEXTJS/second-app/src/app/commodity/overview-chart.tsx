"use client";

import HighchartsAnnotationsModule from "highcharts/modules/annotations";
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
  annotations: [
    {
      draggable: "",
      events: {
        click: function (e) {
          var modal = document.getElementById("annotation-modal");
          modal?.removeAttribute("hidden");
        },
      },
      labelOptions: {
        backgroundColor: "rgba(255,255,255,0.5)",
        verticalAlign: "top",
        y: 15,
      },
      labels: [
        {
          point: {
            xAxis: 100,
            yAxis: 95.6,
            x: 215,
            y: 180,
          },
          text: "TARGET 1",
        },
      ],
    },
  ],
};

function hideModal() {
  var modal = document.getElementById("annotation-modal");
  modal?.setAttribute("hidden", true);
}

function OverviewChart() {
  HighchartsAnnotationsModule(Highchats);
  return (
    <div>
      <HighchartsReact highcharts={Highchats} options={options} />
      <div
        id="annotation-modal"
        hidden
        aria-hidden="true"
        className="bg-gray-100 w-32"
      >
        <div className="flex flex-col">
          <div>OLÁ</div>
          <button onClick={hideModal} className="bg-gray-200 p-4 rounded-2xl">
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default OverviewChart;
