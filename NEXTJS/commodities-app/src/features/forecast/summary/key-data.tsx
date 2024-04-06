import React from "react";
import { Typography } from "@/designs";
import useKeyData from "@/features/forecast/summary/useKeyData";
import Image from "next/image";
import { Indicators, Trends } from "@/types";

type Props = {
  commodityId: string;
};

function getArrowDown() {
  return (
    <Image
      src={"/arrow-downward.svg"}
      alt={"Series Button"}
      width={"0"}
      height={"0"}
      style={{ width: "auto", height: "100%" }}
    />
  );
}

function getArrowForward() {
  return (
    <Image
      src={"/arrow-forward.svg"}
      alt={"Series Button"}
      width={"0"}
      height={"0"}
      style={{ width: "auto", height: "100%" }}
    />
  );
}

function getArrowUp() {
  return (
    <Image
      src={"/arrow-upward.svg"}
      alt={"Series Button"}
      width={"0"}
      height={"0"}
      style={{ width: "auto", height: "100%" }}
    />
  );
}

function renderIndicator(label: string, active: boolean) {
  return (
    <div
      className={"border-b-8 w-28"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: `${active ? "var(--BLUE-70)" : ""}`,
      }}
    >
      <Typography style={"body"} size={"m"} weight={"regular"}>
        {label}
      </Typography>
    </div>
  );
}

function renderIndicators(indicator: Indicators) {
  return (
    <>
      {renderIndicator("Avoid", indicator === "avoid")}
      {renderIndicator("Plan", indicator === "plan")}
      {renderIndicator("Partial", indicator === "partial")}
      {renderIndicator("Full", indicator === "full")}
    </>
  );
}

function renderTrend(trend: Trends, startDate: string) {
  return (
    <>
      <Typography style={"body"} size={"m"} weight={"bold"}>
        Current trend
      </Typography>
      <div className={"flex flex-row gap-4"}>
        <div className={"p-2"} style={{ backgroundColor: "var(--BLUE-10)" }}>
          {trend === "up" && getArrowUp()}
          {trend === "down" && getArrowDown()}
          {trend === "forward" && getArrowForward()}
        </div>
        <Typography style={"body"} size={"m"} weight={"regular"}>
          Trend started:
          <br />
          {startDate}
        </Typography>
      </div>
    </>
  );
}

export default function KeyData({ commodityId }: Props) {
  const {
    trend,
    startDate,
    recommendationIndicator,
    lastUpdated,
    lastChanged,
    summary,
  } = useKeyData(commodityId);

  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"flex flex-col gap-6"}>
        {renderTrend(trend, startDate)}
        <div className={"flex flex-col gap-4"}>
          <Typography style={"body"} size={"m"} weight={"bold"}>
            Hedging recommendation
          </Typography>
          <div className={"flex flex-row gap-1 justify-evenly"}>
            {renderIndicators(recommendationIndicator)}
          </div>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            {summary}
          </Typography>
          <Typography style={"body"} size={"s"} weight={"regular"}>
            Last changed: {lastChanged}
            <br />
            Last updated: {lastUpdated}
          </Typography>
        </div>
      </div>
    </div>
  );
}