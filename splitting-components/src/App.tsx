import React, { lazy, Suspense, useState} from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

const Store = lazy(() => wait(2000).then(() => import("./components/Store")))
const Home = lazy(() => wait(2000).then(() => import("./components/Home")))
const AdminData = lazy(() => wait(2000).then(() => import('./components/AdminData')))

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

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
      <br />
      <br />
      <button onClick={(() => setIsAdmin(prev => !prev))}>Admin</button>
      <Suspense fallback={<h2>Loading...</h2>}>
        {isAdmin ? <AdminData /> : <h2>Not admin</h2>}
      </Suspense>
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
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  )
}

function wait(time: number){
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

export default App
