import { useQuery } from "react-query"
import axios from "axios"
import { Hero } from "../Types/Hero"

export const RQSuperheroes = () => {
  // super-heroes is the query key
  const {isLoading, data} = useQuery(['super-heroes'], () => {
    return axios.get('http://localhost:4000/superheroes')
  })

  if (isLoading){
    return <h2>Loading</h2>
  }
  
  return (
    <>
      <h2>Super Heroes</h2>
      {
        data?.data.map(hero => {
          return <div>{hero.name} - {hero.alterEgo}</div>
        })
      }
    </>
  )
}