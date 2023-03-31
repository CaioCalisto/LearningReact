import { useEffect, useRef, useState } from 'react'

type TimerArgs = {
  miliseconds: number,
  seconds?: number
}

/*
The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.
*/

export const TimerCounter = (args: TimerArgs) => {
  
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    console.log('useEffect was called')
    intervalRef.current && clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setSeconds(s => s + 1), args.miliseconds)
  }, [args.miliseconds])
  
  return (
    <>
      <h4>Timer: <small>{seconds}</small></h4>
    </>
  )
}
