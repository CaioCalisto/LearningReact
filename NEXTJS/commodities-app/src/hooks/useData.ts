"use client"
import { useQuery } from "react-query";
import api from "@/middlewares/axiosInterceptors";
import { useState } from "react";

interface useDataResponse<T> {
  data: T[];
  isLoading: boolean;
  currentPage: number;
  nextPage: () => Promise<void>;
  prevPage: () => Promise<void>;
}

export default function useData<T>(endpoint: string): useDataResponse<T> {
  const [currentPage, setCurrentPagePage] = useState<number>(1);

  const fetchData = (): Promise<T[]> => {
    return api.get(endpoint).then((response) => response.data);
  };

  const { isLoading, isSuccess, isFetching, isError, data, error, refetch } =
    useQuery([endpoint], fetchData, {
      enabled: true,
    });

  async function nextPage() {
    setCurrentPagePage((prevPage) => prevPage + 1);
    await refetch();
  }

  async function prevPage() {
    setCurrentPagePage((prevPage) => Math.max(prevPage - 1, 1));
    await refetch();
  }

  return { data: data ?? [], isLoading, currentPage, nextPage, prevPage };
}
