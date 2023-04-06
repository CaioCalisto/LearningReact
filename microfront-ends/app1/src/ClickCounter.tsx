import React, { useState } from 'react'
import { ShowNumber } from './ShowNumber'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <br />
      <ShowNumber n={count} />
    </div>
  )
}
