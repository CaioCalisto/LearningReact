import React from "react";
import { Order } from "./Order";

interface Props {
  orders: Order[]
}

export const OrderList1: React.FC<Props> = (props: Props) => {
  return(
    <div>
    <h1>New List with function</h1>
    <ul>
      {props.orders.map(order => {
        return <li key={order.id}>Order {order.id}</li>
      })}
    </ul>
  </div>
  )
}