import { Indicators, Trends } from "@/types";

type ForecastMovement = {
  months: number;
  value: number;
};

interface Response {
  id: string;
  trend: Trends;
  startDate: string;
  recommendationIndicator: Indicators;
  lastChanged: string;
  lastUpdated: string;
  summary: string;
  forecastMovements: ForecastMovement[];
}

export default function useKeyData(commodityId: string): Response {
  return {
    id: commodityId,
    trend: "up",
    startDate: "25 Oct 2023",
    recommendationIndicator: "plan",
    lastChanged: "25 Nov 2023",
    lastUpdated: "25 Nov 2023",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsam itaque maxime molestias pariatur quis reiciendis sunt temporibus. Ad aliquid dicta earum illum quisquam sed tenetur veniam. Dolores harum libero molestiae nisi non possimus quam quos sequi sint suscipit. Alias esse fugit laboriosam odit pariatur! Adipisci aperiam atque distinctio esse excepturi, maxime mollitia, possimus quae quidem quos sint, totam. Ab at dolore explicabo iste nihil nisi obcaecati omnis quaerat quidem.",
    forecastMovements: [
      { months: 3, value: 1.09 },
      { months: 6, value: 17.96 },
      { months: 12, value: 21.96 },
      {
        months: 18,
        value: 24.96,
      },
    ],
  };
}
