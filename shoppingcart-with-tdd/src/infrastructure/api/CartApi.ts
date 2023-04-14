import { AxiosError } from 'axios'
import { UseQueryResult } from 'react-query'

export interface CartApi {
  fetch<TData = unknown, TError = AxiosError>(
    onSuccess: (data: TData) => void,
    onError: (error: TError) => void
  ): UseQueryResult<TData, TError>
}
