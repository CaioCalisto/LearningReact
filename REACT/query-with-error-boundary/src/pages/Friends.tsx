import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AxiosResponse } from "axios"
import { getFriends } from '../hooks/ApiClient'

function Friends() {
  const onSuccess = (data: AxiosResponse<any, any>) => {
    alert('Api call SUCCESS: ' + data?.data)
  }

  const onError = (error: unknown) => {
    alert('Api call ERROR: ' + error)
  }

  const {isLoading, isSuccess, isFetching, isError, data, error, refetch} = getFriends(onSuccess, onError)

  if (isError) {
    throw new Error('ERROR IN FRIENDS PAGE!')
  }

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (isFetching) {
    return (
      <h1>Fetching...</h1>
    )
  }

  return (
    <>
      <h1>Friends</h1>
      <button onClick={() => refetch()}>Fetch</button>
      {data?.data.map((friend) => (
        <h1>{friend}</h1>
      ))}
    </>
  )
}

export default Friends