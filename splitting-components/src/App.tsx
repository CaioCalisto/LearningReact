import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Store } from './components/Store'

function App() {
  
  return (
    <>
    <NavWrapper />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
      <br /> 
      <button onClick={() => {
        // Here I only download this component when user click on the button
        import('./components/Something').then(module => {
          alert(module.DoSomeAction('Hello', 'World'))
        })
      }}>
        Click here
      </button>
    </>
  )
}

function NavWrapper(){
  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/store">STORE</Link>
      </nav>
    </>
  )
}

export default App
