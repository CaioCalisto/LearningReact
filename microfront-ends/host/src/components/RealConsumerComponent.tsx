import { useRef } from "react"
import {ClickCounter} from "remote/ClickCounter"

export const RealConsumerComponent = () => {
  const textBoxRef = useRef(null)

  return (
    <>
      <br />
      <br />
      <br />
      <ClickCounter someRef={textBoxRef} someData="MY DATA FROM HOST" />
      <br />
      <br />
      <br />
      <h4>This is my text box from HOST</h4>
      <input type="text" ref={textBoxRef} />
    </>
  )
}