import React, { useState } from "react";
import { Order } from "./Order";

export class OrderList extends React.Component<{title: string, orders: Order[];}>{

  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {this.props.orders.map(order => {
            return <li key={order.id}>Order {order.id}</li>
          })}
        </ul>
      </div>
    )
  }
}