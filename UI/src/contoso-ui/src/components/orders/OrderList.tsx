import React, { useState } from "react";
import { Order } from "./Order";

export class OrderList extends React.Component<{orders: Order[];}>{

  render(){
    return (
      <div>
        <ul>
          {this.props.orders.map(order => {
            return <li key={order.id}>Order {order.id}</li>
          })}
        </ul>
      </div>
    )
  }
}