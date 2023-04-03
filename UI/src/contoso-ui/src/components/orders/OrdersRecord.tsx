import React from 'react'
import { Order } from "../../contexts/Order"
import { OrderRecord } from './OrderRecord'

interface OrdersRecordProps{
  title: string,
  orders: Order[]
}

export function OrdersRecord(props: OrdersRecordProps) {
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        {props.orders.map((order) => {
          return (
            <div key={order.id}>
              <OrderRecord order={order} />
            </div>
          )
        })}
      </div>
    </>
  )
}