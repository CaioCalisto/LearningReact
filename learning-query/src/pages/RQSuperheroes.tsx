import { useQuery } from "react-query"
import axios, { AxiosError } from "axios"
import { Hero } from '../Types/Hero'

const fetchSuperHero = () => {
  return axios
    .get('http://localhost:4000/superheroes')
}

export const RQSuperheroes = () => {

  const onSuccess = (data) => {
    console.log('Perform side effect for SUCCESS', data)
  }

  const onError = (error) => {
    console.log('Perform side effect for ERROR', error)
  }

  // super-heroes is the query key
  const {isLoading, isSuccess, isFetching, isError, data, error, refetch} = useQuery(['super-heroes'], fetchSuperHero,
  {
    //cacheTime: 5000,
    //refetchInterval: 1000,
    enabled: false,
    onSuccess: onSuccess,
    onError: onError
  })

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
          return <div key={hero.id}>{hero.name} - {hero.alterEgo}</div>
        })
      }
    </>
  )
}