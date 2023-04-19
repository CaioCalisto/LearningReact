import { useQuery } from "react-query"
import axios, { AxiosError } from "axios"
import { useSuperHeroesData } from "../hooks/useSuperHeroesData"
import { Link } from "react-router-dom"

export const RQSuperheroes = () => {

  const onSuccess = (data) => {
    console.log('Perform side effect for SUCCESS', data)
  }

  const onError = (error) => {
    console.log('Perform side effect for ERROR', error)
  }

  // super-heroes is the query key
  const {isLoading, isSuccess, isFetching, isError, data, error, refetch} = useSuperHeroesData(onSuccess, onError)

  if (isLoading || isFetching){
    return <h2>Loading</h2>
  }

  if (isError){
    console.log({error})
  }

  return (
    <>
      <h2>Super Heroes</h2>
      <button onClick={refetch}>Fetch</button>
      {
        data?.data.map((hero) => {
          return <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>
              {hero.name} - {hero.alterEgo}
            </Link>
          </div>
        })
      }
    </>
  )
}