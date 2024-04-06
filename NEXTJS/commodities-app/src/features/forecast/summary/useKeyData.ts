import { Indicator } from "@/types";

interface Response {
  id: string;
  trend: "up" | "down" | "forward";
  startDate: string;
  recommendationIndicator: Indicator;
}

export default function useKeyData(commodityId: string): Response {
  return {
    id: commodityId,
    trend: "up",
    startDate: "25 Oct 2023",
    recommendationIndicator: 'plan'
  };
}
