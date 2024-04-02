'use client'
import React from "react";
import { SeriesButton, Typography } from "@/app/designs";
import useData from "@/app/hooks/useData";
import { Product } from "@/app/types";

function Page() {
  const { data, isLoading } = useData<Product>("api/products/2LN6");
  if (isLoading){
    return (<Typography style={"title"} size={"s"} weight={"bold"}>
      Loading
    </Typography>)
  }

  return (
    <div className={"flex flex-col gap-3"}>
      <div className={"flex flex-col"}>
        <Typography style={"title"} size={"s"} weight={"bold"}>
          {data[0].title}
        </Typography>
        <Typography style={"body"} size={"m"} weight={"regular"}>
          {data[0].description}
        </Typography>
      </div>
      <div className={"flex flex-row divide-x"}>
        <div className={"flex flex-col pr-3"}>
          <Typography style={"body"} size={"l"} weight={"bold"}>
            {data[0].currentPrice}
          </Typography>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            Quote | {data[0].currency} | {data[0].frequency}
          </Typography>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            Last updated: {data[0].lastUpdate}
          </Typography>
        </div>
        <div className={"flex flex-col px-3"}>
          <Typography
            style={"body"}
            size={"l"}
            weight={"bold"}
            color={"var(--GREEN-60)"}
          >
            {data[0].comparison}
          </Typography>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            vs previous week: {data[0].lastPrice}
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

export default Page;
