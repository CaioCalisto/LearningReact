import React from "react";
import { Order } from "./Order";

export const OrderList1: React.FC<{orders : Order[]}> = ({orders}) => {
  return(
    <div>
    <h1>New List with function</h1>
    <ul>
      {orders.map(order => {
        return <li key={order.id}>Order {order.id}</li>
      })}
    </ul>
  </div>
  )
}