import { Commodity } from "@/types";
import useData from "@/hooks/useData";

interface Response {
  isLoading: boolean;
  commodity: Commodity;
}

export default function useDetails(id: string): Response {
  const { data, isLoading } = useData<Commodity>(`api/commodities/${id}`);

  return {
    isLoading,
    commodity: data[0],
  };
}
