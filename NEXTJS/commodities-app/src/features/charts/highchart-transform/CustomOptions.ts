import { Options } from "highcharts";

export class CustomOptions {
  private highchartOptions: Options;

  constructor() {
    this.highchartOptions = {};
  }

  withTitle(title: string): this {
    this.highchartOptions = {
      ...this.highchartOptions,
      title: { text: title },
    };

    return this;
  }

  withTooltip(message: string): this {
    this.highchartOptions = {
      ...this.highchartOptions,
      tooltip: {
        backgroundColor: "var(--GRAY-70)",
        style: { color: "var(--GRAY-2)" },
        formatter: function () {
          return message;
        },
      },
    };

    return this;
  }

  withYAsisTitle(title: string): this {
    this.highchartOptions = {
      ...this.highchartOptions,
      yAxis: { title: { text: title } },
    };

    return this;
  }

  withLineSeries(name: string, data: number[]): this {
    this.highchartOptions = {
      ...this.highchartOptions,
      series: [
        {
          name: name,
          type: "line",
          data,
          color: "var(--BLUE-50)",
        },
      ],
    };

    return this;
  }

  withXAsis(title: string, categories: string[]): this {
    this.highchartOptions = {
      ...this.highchartOptions,
      xAxis: {
        title: { text: title },
        categories,
      },
    };

    return this;
  }

  withZoom(min: number, max: number): this {
    this.highchartOptions = {
      ...this.highchartOptions,
      xAxis: {
        ...this.highchartOptions.xAxis,
        min,
        max,
      },
    };

    return this;
  }

  getOptions(): Options {
    return this.highchartOptions;
  }
}
