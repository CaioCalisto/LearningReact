import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperheroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends')
}

export const ParallelQueries = () => {

  const {data: superheroes} = useQuery('super-heroes', fetchSuperheroes)
  const {data: friends} = useQuery('friends', fetchFriends)

  console.log(superheroes)
  console.log(friends)
  
  return (
    <div>Parallel Queries</div>
  )
}