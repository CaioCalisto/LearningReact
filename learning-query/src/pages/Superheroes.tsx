import { useState, useEffect } from 'react'
import axios from 'axios'
import { Hero } from '../Types/Hero'

export const Superheroes = () => {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<Hero[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data)
      setLoading(false)
    }).catch(error => {
      setError(error.message)
      setLoading(false)
    })
  }, [])

  if (isLoading){
    return <h2>Loading...</h2>
  }

  if (error){
    return <h2>{error}</h2>
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