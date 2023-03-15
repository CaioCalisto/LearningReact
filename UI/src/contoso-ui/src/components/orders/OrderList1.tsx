import Button from "@mui/material/Button";
import React from "react";
import { Order } from "./Order";

/*
export const OrderList1: React.FC<{orders : Order[]}> = ({orders}) => {
  return(
    <div>
    <ul>
      {orders.map(order => {
        return <li key={order.id}>Order :: {order.id}</li>
      })}
    </ul>
  </div>
  )
}
*/

type MyProps = {
  orders : Order[]
}
export const OrderList1 = (props: MyProps) => {
  return(
    <div>
    <ul>
      {props.orders.map(order => {
        return <li key={order.id}>Order :: {order.id}</li>
      })}
    </ul>
  </div>
  )
}