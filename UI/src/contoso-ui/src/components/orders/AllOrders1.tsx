import React from "react"
import { OrderList1 } from "./OrderList1"
import { Order } from "./Order"
import { Status } from "./Status";
import Button from "@mui/material/Button";

export const All_Order = () => {
  const [orders, setOrders] = React.useState<Order[]>([]);

  return(
    <div>
      <Button variant="outlined" onClick={AddNew}>Add new</Button>
      <OrderList1 orders={orders}/>
    </div>
  )

  function AddNew() : void {
    setOrders(orders => [...orders, {"id": 10, "start": new Date(2023, 3, 14, 1, 0, 0), "end": new Date(2023, 3, 14, 1, 10, 0), "status": Status.Ready }]);
  }
}