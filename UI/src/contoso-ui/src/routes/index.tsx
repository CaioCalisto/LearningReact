import React from 'react'
import { BrowserRouter, Route, Routes as Switch, Link } from 'react-router-dom'
import { Orders } from '../pages/Orders'
import { Home } from '../pages/Home'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Switch>
        </BrowserRouter>
    )
}
