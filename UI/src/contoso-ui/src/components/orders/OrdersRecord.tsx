import React from 'react'
import { Order } from "../../contexts/Order"
import { useOrderContext } from '../../contexts/OrderContext'
import { Status } from '../../contexts/Status'
import { OrderRecord } from './OrderRecord'

interface OrdersRecordProps{
  title: string,
  status: Status
}

export function OrdersRecord(props: OrdersRecordProps) {
  const { orders } = useOrderContext()
  
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        {orders.map((order) => {
          if (order.status == props.status){
            return (
              <div key={order.id}>
                <OrderRecord order={order} />
              </div>
            )
          }
        })}
      </div>
    </>
  )
}