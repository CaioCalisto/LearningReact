import React, { lazy, Suspense} from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'

const Store = lazy(() => import("./components/Store"))

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
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
      <nav style={{ display: "flex", gap: "1rem"}}>
        <Link to="/">HOME</Link>
        <Link to="/store">STORE</Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default App
