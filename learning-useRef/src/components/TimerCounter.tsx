import { useEffect, useRef, useState } from 'react'

type TimerArgs = {
  miliseconds: number,
  seconds?: number
}

export const TimerCounter = (args: TimerArgs) => {
  
  const [seconds, setSeconds] = useState(0)
  const ref = useRef()

  useEffect(() => {
    ref.current && clearInterval(ref.current)
    ref.current = setInterval(() => setSeconds(s => s + 1), args.miliseconds)
  }, [args.miliseconds])
  
  return (
    <>
      <h4>Timer: <small>{seconds}</small></h4>
    </>
  )
}
