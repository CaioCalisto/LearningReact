import React, { useState } from 'react'
import MyForm from './MyForm'

function MyFormParent() {
  const [myValue, setMyValue] = useState("NA")

  const onCallbackReceived = (someValue: string) => {
    setMyValue(someValue)
  }

  return (
    <>
      <h1>{myValue}</h1>
      <br />
      <MyForm myCallback={onCallbackReceived} />
    </>
  )
}

export default MyFormParent