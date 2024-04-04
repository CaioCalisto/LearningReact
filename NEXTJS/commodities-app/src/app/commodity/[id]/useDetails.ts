import { Product } from "@/types";
import useData from "@/hooks/useData";

interface Response {
  isLoading: boolean;
  commodity: Product;
}

export default function useDetails(id: string): Response {
  const { data, isLoading } = useData<Product>(`api/products/${id}`);

  return {
    isLoading,
    commodity: data[0],
  };
}
