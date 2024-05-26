import { HighchartsReactProps } from "highcharts-react-official";
import { CustomOptions } from "@/features/charts/highchart-transform/CustomOptions";

const data: number[] = [
  1, 2, 4, 3, 4, 1, 5, 2, 4, 3, 6, 5, 4, 3, 2, 5, 6, 7, 8, 5, 3, 2, 1, 2, 3, 4,
    4, 2, 1, 3, 4, 4, 5, 2, 4, 3, 6, 5, 4, 3, 2, 5, 6, 7, 8, 5, 3, 2, 1, 2, 3, 4,
    4, 2, 1, 3, 4, 4, 5, 2, 4, 3, 6, 5, 4, 3, 2, 5, 6, 7, 8, 5
];

function generateDateStrings(firstYear: number, untilYear: number): string[] {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let result: string[] = [];

    for (let year = firstYear; year <= untilYear; year++) {
        for (let month of months) {
            result.push(`${month}/${year}`);
        }
    }

    return result;
}

export default function useChart(commodityId: string): HighchartsReactProps {
  const options = new CustomOptions()
    .withTitle("")
    .withLineSeries(commodityId, data)
    .withXAsis("Period", generateDateStrings(2022, 2027))
    .withYAsisTitle("Value")
    .withTooltip("Custom message")
    .getOptions();

  return { options };
}
