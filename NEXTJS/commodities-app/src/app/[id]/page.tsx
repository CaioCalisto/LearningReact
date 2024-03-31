import React from "react";
import {SeriesButton, Typography} from "@/app/designs";

function Page() {
  return (
    <div className={"flex flex-col gap-3"}>
      <div className={"flex flex-col"}>
        <Typography style={"title"} size={"s"} weight={"bold"}>
          Imports - US Seafood Groundfish - Frozen Fish Fillet Blocks Surimi -
          Total
        </Typography>
        <Typography style={"body"} size={"m"} weight={"regular"}>
          Imports - US Seafood Groundfish - Frozen Fish Fillet Blocks Pollock
          Al- Total
        </Typography>
      </div>
      <div className={"flex flex-row divide-x"}>
        <div className={"flex flex-col pr-3"}>
          <Typography style={"body"} size={"l"} weight={"bold"}>
            0.7418
          </Typography>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            Quote | GBP/lbs | Weekly
          </Typography>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            Last updated: 21 Nov 2023
          </Typography>
        </div>
        <div className={"flex flex-col px-3"}>
          <Typography style={"body"} size={"l"} weight={"bold"} color={"var(--GREEN-60)"}>
            + 36.09%
          </Typography>
          <Typography style={"body"} size={"m"} weight={"regular"}>
            vs previous week: 07266
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
