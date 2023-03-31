import React, { useState } from 'react'
import { TimerCounter } from './TimerCounter'

export const Timer = () => {
  
  const [miliseconds, setMiliseconds] = useState(1000)

  return (
    <>
      <span>Delay in Miliseconds: {miliseconds}</span>
      <br />
      <button 
        className='btn btn-outline-success'
        onClick={() => setMiliseconds(1000)}
      >
        1000
      </button>
      <br />
      <button 
        className='btn btn-outline-success'
        onClick={() => setMiliseconds(5000)}
      >
        5000
      </button>
      <br />
      <br />
      <TimerCounter miliseconds={miliseconds} />
    </>  
  )
}
