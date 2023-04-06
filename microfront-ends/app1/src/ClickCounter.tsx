import React, { useState } from 'react'
import { ShowNumber } from './ShowNumber'

interface ClickCounterProps {
  someRef: React.RefObject<HTMLElement>,
  someData: string
}

export const ClickCounter = ({ someRef, someData } : ClickCounterProps) => {
  const [count, setCount] = useState(0)

  function focusOnTheTextBox() {
    if (someRef?.current == null){
      console.log('REF IS NULL')
    }
    someRef?.current?.focus
  }

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <br />
      <ShowNumber n={count} />
      <br />
      <br />
      <button onClick={() => focusOnTheTextBox()}>Focus on something</button>
      <br />
      <h1>Data received from HOST: {someData}</h1>
    </div>
  )
}
