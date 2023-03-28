import { useQuery } from "react-query"
import axios, { AxiosResponse } from "axios"

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

  if (superheroes && friends){
    return (
      <>
        {showSuperheroes(superheroes)}
        <hr />
        {showFriends(friends)}
      </>
    )
  }

  if (superheroes){
    return showSuperheroes(superheroes)
  }

  if (friends){
    return showFriends(friends)
  }
  
  return (
   <>Loading...</>
  )
}

const showFriends = (friends: AxiosResponse<any, any>) => {
  return (
    <>
        <h3>Friends</h3>
        {friends?.data.map((friend) => (
          <h4>{friend.name}</h4>
        ))}
      </>
  )
}

const showSuperheroes = (superheroes: AxiosResponse<any, any>) => {
  return (
    <>
      <h3>Superheroes</h3>
      {superheroes?.data.map((hero) => (
        <h4>{hero.name}-{hero.alterEgo}</h4>
      ))}
    </>
  )
}