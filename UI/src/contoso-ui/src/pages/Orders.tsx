import React from 'react'
import { NewOrder } from '../components/orders/NewOrder'
import { OrdersRecord } from '../components/orders/OrdersRecord'
import OrderProvider, { useOrderContext } from '../contexts/OrderContext'
import { Status } from '../contexts/Status'

export const Orders = () => {
    
    return (
        <>
            <h1>Fast Food orders</h1>
            <OrderProvider>
                <NewOrder />
                <OrdersRecord title="New" status={Status.New} />
                <br />
                <OrdersRecord title="Preparing" status={Status.Preparing} />
                <br />
                <OrdersRecord title="Delivery" status={Status.Ready} />
            </OrderProvider>
        </>
    )
}