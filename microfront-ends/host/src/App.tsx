import React from 'react'
import './styles.css'
import {ClickCounter} from "remote/ClickCounter"

export const App = () => {
  return (
    <div>
      <h1>Host that consume component ClickCounter from micro frontend</h1>
      <br />
      <ClickCounter />
    </div>
  )
}
