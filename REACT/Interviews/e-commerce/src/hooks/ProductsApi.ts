import axios, { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { Api } from "./Api";

const fetchCups = () => {
  return axios.get('http://localhost:3030/api/cups')
}

export class ProductsApi implements Api {
  getProducts<
    TData = unknown,
    TError = AxiosError<unknown, any>
  >(): UseQueryResult<TData, TError> {
    return useQuery(['cups'], fetchCups,
  {
    enabled: true
  })
  }
}
