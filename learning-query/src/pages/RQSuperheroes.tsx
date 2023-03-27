import { useQuery } from "react-query"
import axios, { AxiosError } from "axios"
import { Hero } from '../Types/Hero'

const fetchSuperHero = () => {
  return axios
    .get('http://localhost:4000/superheroes')
}

export const RQSuperheroes = () => {
  // super-heroes is the query key
  const {isLoading, isSuccess, isError, data, error, refetch} = useQuery(['super-heroes'], fetchSuperHero)

  if (isLoading){
    return <h2>Loading</h2>
  }

  if (isError){
    console.log({error})
  }

  return (
    <>
      <h2>Super Heroes</h2>
      {
        data?.data.map((hero) => {
          return <div>{hero.name} - {hero.alterEgo}</div>
        })
      }
    </>
  )
}