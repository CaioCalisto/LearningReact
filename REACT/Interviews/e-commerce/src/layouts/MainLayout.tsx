import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function MainLayout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ minHeight: "100vh", width: "100%"}}>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout