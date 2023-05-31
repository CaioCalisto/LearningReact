import React from 'react'
import Header from '../components/Header'
import { Outlet } from "react-router-dom"

function PublicLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default PublicLayout