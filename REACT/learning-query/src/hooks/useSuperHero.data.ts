import { useQuery, useQueryClient } from "react-query"
import axios, { AxiosError } from "axios"

const fetchSuperHero = (heroId: number) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId: number) => {
 
  const queryClient = useQueryClient()
  return useQuery(['super-hero', heroId], () => fetchSuperHero(heroId), {
    initialData: () => {
      const hero = queryClient.getQueryData('super-heroes')
        ?.data?.find(hero => hero.id === parseInt(heroId))

      if (hero){
        return {
          data: hero
        }
      } else {
        return undefined
      }
    }
  })
}