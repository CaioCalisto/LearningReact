interface Response {
  id: string;
  trend: "up" | "down" | "forward";
  startDate: string;
  recommendationIndicator: 'avoid' | 'plan' | 'partial' | 'full';
}

export default function useKeyData(commodityId: string): Response {
  return {
    id: commodityId,
    trend: "up",
    startDate: '25 Oct 2023',
    recommendationIndicator: 'partial'
  };
}
