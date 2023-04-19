import { useQueries } from "react-query"
import axios from "axios"

const fetchSuperHero = (heroId: number) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const DynamicParallel = ({ heroIds }) => {
  
  const queryResults = useQueries(
    heroIds.map(id => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id)
      }
    })
  )
  
  console.log({queryResults})

  return (
    <div>
      Dynamic parallel, logged in console
    </div>
  )
}