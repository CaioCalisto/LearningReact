import axios, { AxiosResponse } from "axios"
import { useQuery } from "react-query"

type ApiType = {
  onSuccess: (data: AxiosResponse<any, any>) => void,
  onError: (err: unknown) => void
}

const fetchFriends = () => {
  return axios
    .get('http://localhost:4000/friends')
}

export function getFriends({onSuccess, onError} : ApiType ) {
  return useQuery(['friends'], fetchFriends,
  {
    enabled: false,
    onSuccess: onSuccess,
    onError: onError
  })
}