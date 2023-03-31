import { useEffect, useState } from 'react'

type TimerArgs = {
  miliseconds: number,
  seconds?: number
}

export const TimerCounter = (args: TimerArgs) => {
  
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    alert('useEffect')
    setInterval(() => setSeconds(s => s + 1), 1000)
  }, [args.miliseconds])
  
  return (
    <>
      <h4>Timer in Seconds: <small>{seconds}</small></h4>
    </>
  )
}
