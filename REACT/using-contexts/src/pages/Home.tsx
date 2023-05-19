import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Home() {

  const { user } = useContext(UserContext) 

  return (
    <>
      <h1>Hello {user}</h1>
    </>
  )
}

export default Home