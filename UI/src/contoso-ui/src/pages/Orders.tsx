import React from 'react'
import { OrdersRecord } from '../components/orders/OrdersRecord'
import { Order } from '../contexts/Order'
import OrderProvider from '../contexts/OrderContext'
import { Status } from '../contexts/Status'

const orders: Order[]= [
    { id: 1, start: new Date(2018, 0O5, 0O5, 17, 23, 42, 11), end: null, status: Status.New},
    { id: 2, start: new Date(2018, 0O5, 0O5, 17, 40, 42, 11), end: null, status: Status.New}    
]

export class Orders extends React.Component {
    
    render() {
        return (
            <>
                <h1>Fast Food orders</h1>
                <OrderProvider>
                    <OrdersRecord title="New" orders={orders.filter(order => order.status == Status.New)} />
                    <br />
                    <OrdersRecord title="Preparing" orders={orders.filter(order => order.status == Status.Preparing)} />
                    <br />
                    <OrdersRecord title="Delivery" orders={orders.filter(order => order.status == Status.Ready)} />
                </OrderProvider>
            </>
        )
    }
}
