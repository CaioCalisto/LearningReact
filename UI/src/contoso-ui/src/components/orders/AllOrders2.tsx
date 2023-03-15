import React from "react"
import { Order } from "./Order"
import { Status } from "./Status";
import Button from "@mui/material/Button";
import { ShowOrderTable } from "./OrderList2";

export function ShowAllOrder(){
  const [orders, setOrders] = React.useState<Order[]>([]);

  return(
    <div>
      <Button variant="outlined" onClick={AddNew}>Add new</Button>
      <ShowOrderTable orders={orders} remove={Remove}/>
    </div>
  )

  function AddNew() : void {
    setOrders(orders => [...orders, {"id": 10, "start": new Date(2023, 3, 14, 1, 0, 0), "end": new Date(2023, 3, 14, 1, 10, 0), "status": Status.Ready }]);
  }

  function Remove(id: number) {
    setOrders(orders.filter(item => item.id != id));
  }
}