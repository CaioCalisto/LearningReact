import { HighchartsReactProps } from "highcharts-react-official";
import { Options } from "highcharts";

export default function useChart(commodityId: string): HighchartsReactProps {
  const options: Options = {
    title: { text: "" },
    series: [
      {
        name: commodityId,
        type: "line",
        data: [1, 2, 4, 3, 4, 1],
        color: "var(--BLUE-50)",
      },
    ],
    xAxis: { title: { text: "Period" } },
    yAxis: { title: { text: "Value" } },
    tooltip: {
      backgroundColor: "var(--GRAY-70)",
      style: { color: "var(--GRAY-2)" },
      formatter: function () {
        return `Custom message`;
      },
    },
  };

  return { options };
}
