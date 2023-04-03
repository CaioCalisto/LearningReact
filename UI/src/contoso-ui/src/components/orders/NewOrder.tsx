import React from "react"
import { useOrderContext } from "../../contexts/OrderContext"

export const NewOrder = () => {
  const { createOrder } = useOrderContext()
  
  return (
    <>
      <button onClick={() => createOrder()}>Add</button>
    </>
  )
}