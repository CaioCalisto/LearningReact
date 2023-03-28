import { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchColors = (pageNumber: number) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

export const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, isError, error, data, isFetching} = useQuery(
    ['colors', pageNumber], 
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    })

  if (isLoading){
    return <h2>Loading...</h2>
  }

  if (isError){
    return <h2>Some error occurred...</h2>
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>{color.id}-{color.label}</h2>
            </div>
          )
        })}
      </div>
      <div>
        <button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>Previous</button>
        <button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 5}>Next</button>
      </div>
      <div>
        { isFetching && 'Loading'}
      </div>
    </>
  )
}