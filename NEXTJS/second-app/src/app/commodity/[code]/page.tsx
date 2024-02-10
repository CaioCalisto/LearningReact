import LargeTabs from "@/app/styled-components/tabs/large-tabs";
import { Typography } from "@/app/styled-components/typography/typography";
import React from "react";
import OverviewChart from "../overview-chart";
import ForecastChart from "../forecast-chart";

function CommodityView() {
  return (
    <div className="flex flex-col pl-2 sm:pl-4 md:pl-8 lg:pl-12 xl:pl-20 pt-4">
      {/* TITLE AND DESCRIPTION */}
      <div className="flex flex-col pb-6">
        <Typography type="TITLE" size="S" weight="SEMIBOLD">
          LPDE const fob US
        </Typography>
        <Typography type="BODY" size="M" weight="REGULAR">
          Low density polyethylene (LPDE) | large volume transactions | contract
          price
        </Typography>
      </div>
      {/* END TITLE AND DESCRIPTION */}

      {/* ITEM SUMMARY */}
      <div className="flex flex-row pb-4">
        {/* ITEM DETAIL */}
        <div className="flex flex-col pr-6">
          <Typography type="TITLE" size="XS" weight="SEMIBOLD">
            0.7418
          </Typography>
          <Typography type="BODY" size="M" weight="REGULAR">
            Quote | GBP/lbs | Weekly
          </Typography>
          <Typography type="BODY" size="S" weight="REGULAR">
            Last update: 21 Nov 2023
          </Typography>
        </div>
        {/* END ITEM DETAIL */}
        {/* ITEM PRICE */}
        <div className="flex flex-col">
          <Typography type="TITLE" size="XS" weight="SEMIBOLD" color="green">
            36.09 %
          </Typography>
          <Typography type="BODY" size="M" weight="REGULAR">
            vs previous week: 0.7266
          </Typography>
        </div>
        {/* END ITEM PRICE */}
      </div>
      {/* END ITEM SUMMARY */}

      {/* CHART */}
      <LargeTabs
        contents={[
          { title: "Overview", render: <OverviewChart /> },
          { title: "Forecast", render: <ForecastChart /> },
        ]}
      />
      {/* END CHART */}
    </div>
  );
}

export default CommodityView;
