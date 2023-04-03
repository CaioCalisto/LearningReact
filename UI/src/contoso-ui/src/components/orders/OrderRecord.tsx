import React from 'react'
import { Order } from "../../contexts/Order";
import { useOrderContext } from '../../contexts/OrderContext';
import { Status } from '../../contexts/Status';

interface OrderRecordProps{
  order: Order
}

export function OrderRecord(props: OrderRecordProps) {
  
  const { move } = useOrderContext()
  let buttonLabel = ''
  if (props.order.status == Status.Ready){
    buttonLabel = 'remove'
  } else {
    buttonLabel = 'move'
  }

  return (
    <>
      <li>
        Order {props.order.id}
        <button onClick={() => move(props.order.id)}>
          {buttonLabel}
        </button>
      </li>
    </>
  )
}