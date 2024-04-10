import { CommodityDetails } from "@/types";
import useData from "@/hooks/useData";

interface Response {
  isLoading: boolean;
  commodity: CommodityDetails;
}

export default function useDetails(id: string): Response {
  const { data, isLoading } = useData<CommodityDetails>(`api/commodities/${id}`);

  return {
    isLoading,
    commodity: data[0],
  };
}
