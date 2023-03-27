import { useQuery } from "react-query"
import axios, { AxiosError } from "axios"

const fetchSuperHero = (heroId: number) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId: number) => {
  return useQuery(['super-hero', heroId], () => fetchSuperHero(heroId))
}