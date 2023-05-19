import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'

import UserContext from './contexts/UserContext'

function App() {

  const [user, setUser] = useState("caio")
  
  return (
    <UserContext.Provider value={ { user, setUser }}>
      <h1>Hello {user}</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
