import Button from "@mui/material/Button";
import React from "react";
import { Order } from "./Order";

export function ShowOrderTable(props:{orders: Order[], remove(id: number): void}){
  return(
    <div>
    <ul>
      {props.orders.map(order => {
        return <li key={order.id}>Order: {order.id}<Button variant="contained" onClick={() => props.remove(order.id) }>Remove</Button></li>
      })}
    </ul>
  </div>
  )
}