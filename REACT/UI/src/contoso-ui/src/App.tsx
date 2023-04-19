import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Orders } from './pages/Orders'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
