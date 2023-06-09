import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import PublicLayout from './layouts/PublicLayout'
import Lorem from './pages/Lorem'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/one" element={<PublicLayout />}>
          <Route index element={<Lorem />}/>
        </Route>
        <Route path="/two" element={<AdminLayout />}>
          <Route index element={<Lorem />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
