import React from "react";
import useDetails from "@/app/commodity/[id]/useDetails";
import { SeriesButton, Typography } from "@/designs";

type Props = {
  id: string;
};

function Details({ id }: Props) {
  const { isLoading, commodity } = useDetails(id);

  if (isLoading) {
    return (
      <Typography style={"title"} size={"s"} weight={"bold"}>
        Loading
      </Typography>
    );
  }

  return (
    <div className={"flex flex-col gap-3"}>
      <div className={"flex flex-col"}>
        <Typography style={"title"} size={"s"} weight={"bold"}>
          {commodity.title}
        </Typography>
        <Typography style={"body"} size={"m"} weight={"regular"}>
          {commodity.description} - {commodity.code}
        </Typography>
      </div>
      <div className={"flex flex-row divide-x"}>
        <div className={"flex flex-col pr-3"}>
          <Typography style={"body"} size={"l"} weight={"bold"}>
            {commodity.currentPrice}
          </Typography>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            Quote | {commodity.currency} | {commodity.frequency}
          </Typography>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            Last updated: {commodity.lastUpdate}
          </Typography>
        </div>
        <div className={"flex flex-col px-3"}>
          <Typography
            style={"body"}
            size={"l"}
            weight={"bold"}
            color={"var(--GREEN-60)"}
          >
            {commodity.comparison}
          </Typography>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            vs previous week: {commodity.lastPrice}
          </Typography>
        </div>
        <div className={"flex flex-row h-8 gap-3 pl-2"}>
          <SeriesButton iconPath={"/info.svg"} />
          <SeriesButton iconPath={"/star.svg"} />
          <SeriesButton iconPath={"/pin.svg"} />
          <SeriesButton iconPath={"/notification-add.svg"} />
        </div>
      </div>
    </div>
  );
}

export default Details;
