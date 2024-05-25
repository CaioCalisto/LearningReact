import { HighchartsReactProps } from "highcharts-react-official";
import { CustomOptions } from "@/features/charts/highchart-transform/CustomOptions";

export default function useChart(commodityId: string): HighchartsReactProps {
  const options = new CustomOptions()
    .withTitle("")
    .withLineSeries(commodityId, [1, 2, 4, 3, 4, 1, 5, 2, 4, 3, 6, 5])
    .withXAsis("Period", [
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
    ])
    .withYAsisTitle("Value")
    .withTooltip("Custom message")
    .getOptions();

  return { options };
}
