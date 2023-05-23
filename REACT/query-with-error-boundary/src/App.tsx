import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Friends from './pages/Friends'

function App() {
  
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/friends' element={<Friends />}/>
        <Route path='*' element={<h1>Page not found!</h1>} />
      </Routes>
    </>
  )
}

export default App
