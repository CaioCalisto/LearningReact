import { AxiosError } from "axios";
import { UseQueryResult } from "react-query";

export interface Api {
  getProducts<TData = unknown, TError = AxiosError>(): UseQueryResult<
    TData,
    TError
  >;
}
