import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from "react-bootstrap"
import { Consumer } from './components/Consumer'
import { Home } from './components/Home'
import { Menu } from './components/Menu'

export const App = () => {
  return (
    <>
      <Menu />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consumer" element={<Consumer />} />
        </Routes>
      </Container>
    </>
  )
}
