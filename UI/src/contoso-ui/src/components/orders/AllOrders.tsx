import React from "react"
import { OrderList } from "./OrderList"
import { Order } from "./Order"
import { Status } from "./Status";

export class AllOrders extends React.Component{

  render(){
    const ready: Order[] = [
      { "id": 0, "start": new Date(2023, 3, 14, 1, 0, 0), "end": new Date(2023, 3, 14, 1, 10, 0), "status": Status.Ready },
      { "id": 1, "start": new Date(2023, 3, 14, 1, 12, 0), "end": new Date(2023, 3, 14, 1, 15, 0), "status": Status.Ready }
    ];
    const preparing: Order[] =[
      { "id": 2, "start": new Date(2023, 3, 14, 1, 20, 0), "end": null, "status": Status.Preparing }
    ];
    const newOrders: Order[] =[
      { "id": 3, "start": new Date(2023, 3, 14, 1, 20, 0), "end": null, "status": Status.New }
    ];

    return(
      <div>
        <OrderList title="New" orders={newOrders} />
        <br></br>
        <OrderList title="Preparing" orders={preparing} />
        <br></br>
        <OrderList title="Ready" orders={ready} />
      </div>
    )
  }
}