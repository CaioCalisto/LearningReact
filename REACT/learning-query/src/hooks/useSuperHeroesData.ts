import { useQuery } from "react-query"
import axios, { AxiosError } from "axios"

const fetchSuperHero = () => {
  return axios
    .get('http://localhost:4000/superheroes')
}

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(['super-heroes'], fetchSuperHero,
  {
    //cacheTime: 5000,
    //refetchInterval: 1000,
    enabled: false,
    onSuccess: onSuccess,
    onError: onError,
  })
}