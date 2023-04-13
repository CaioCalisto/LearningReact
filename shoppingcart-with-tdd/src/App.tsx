import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Menu } from './components/Menu'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'

export const App = () => {
  return (
    <>
      <Menu />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  )
}
