import React, { useState } from "react"
import { OrderList } from "./OrderList"
import { Order } from "./Order"
import { Status } from "./Status";
import Button from "@mui/material/Button";
import { All_Order } from "./AllOrders1";

export class AllOrders extends React.Component{
   
  private readyOrder: Array<Order> = [];
  private preparingOrder: Array<Order> = [];
  private newOrders: Order[] = [];

  constructor(){
    super({});
    this.readyOrder.push({"id": 10, "start": new Date(2023, 3, 14, 1, 0, 0), "end": new Date(2023, 3, 14, 1, 10, 0), "status": Status.Ready });
    this.preparingOrder.push({ "id": 2, "start": new Date(2023, 3, 14, 1, 20, 0), "end": null, "status": Status.Preparing });
  }

  render(){

    return(
      <div>
        <Button variant="outlined">Add new</Button>
        <OrderList title="New" orders={this.newOrders}/>
        <br></br>
        <OrderList title="Preparing" orders={this.preparingOrder} />
        <br></br>
        <OrderList title="Ready" orders={this.readyOrder} />
        <All_Order />
      </div>
    )
  }
}