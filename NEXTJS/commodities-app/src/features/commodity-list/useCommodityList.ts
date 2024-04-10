import useData from "@/hooks/useData";
import { Commodity } from "@/types";

interface Response {
  isLoading: boolean;
  commodity: Commodity;
}

export default function useCommodityList() {
  const { data, isLoading } = useData<Commodity>("api/commodities");

  return { data, isLoading };
}
