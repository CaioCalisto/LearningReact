import axios, { AxiosError } from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { CartApi } from './CartApi'

export class CartApiRequest implements CartApi {
  fetch<TData = unknown, TError = AxiosError<unknown, any>>(
    onSuccess: (data: TData) => void,
    onError: (error: TError) => void
  ): UseQueryResult<TData, TError> {
    return useQuery(['products'], fetchProducts, {
      //cacheTime: 5000,
      //refetchInterval: 1000,
      enabled: true,
      onSuccess: onSuccess,
      onError: onError,
    })
  }
}

const fetchProducts = () => {
  return axios.get(process.env.API_URL + '/products')
}
