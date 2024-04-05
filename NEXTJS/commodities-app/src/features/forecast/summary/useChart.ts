import { HighchartsReactProps } from "highcharts-react-official";
import { Options } from "highcharts";

export default function useChart(commodityId: string): HighchartsReactProps {
  const options: Options = {
    title: {
      text: `Commodity ${commodityId}`,
    },
    series: [
      {
        type: 'line',
        data: [1, 2, 4, 3, 4, 1],
      },
    ],
  };

  return { options };
}
