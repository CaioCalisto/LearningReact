import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function MainLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ minHeight: "100vh"}}>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout