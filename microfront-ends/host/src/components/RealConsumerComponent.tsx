import { useRef } from "react"
import {ClickCounter} from "remote/ClickCounter"

export const RealConsumerComponent = () => {
  const textBoxRef = useRef(null)

  return (
    <>
      <h1>HERE I AM IN HOST</h1>
      <br />
      <br />
      <br />
      <h4>This is my text box from HOST</h4>
      <input type="text" ref={textBoxRef} />
      <br />
      <br />
      ----------------------------------------------------------------------------------------------------
      <ClickCounter someRef={textBoxRef} someData="MY DATA FROM HOST" />
    </>
  )
}