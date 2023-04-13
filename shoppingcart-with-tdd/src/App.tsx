import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Menu } from './components/Menu'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <>
      <Menu />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  )
}
