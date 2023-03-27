import { useState, useEffect } from 'react'
import axios from 'axios'

type Hero = {
  id: number,
  name: string,
  alterEgo: string
}

export const Superheroes = () => {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<Hero[]>([])

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data)
      setLoading(false)
    })
  }, [])

  if (isLoading){
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Super Heroes</h2>
      {data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>
      })}
    </>
  )
}