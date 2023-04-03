import React from 'react'
import { Order } from "../../contexts/Order";
import { useOrderContext } from '../../contexts/OrderContext';

interface OrderRecordProps{
  order: Order
}

export function OrderRecord(props: OrderRecordProps) {
  
  const { 
    move
  } = useOrderContext()
  return (
    <>
      <li>
        Order {props.order.id}
        <button onClick={() => move(props.order.id)}>move</button>
      </li>
    </>
  )
}