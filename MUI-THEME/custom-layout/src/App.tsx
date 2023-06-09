import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import PublicLayout from './layouts/PublicLayout'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/one" element={<PublicLayout />}>
          <Route index element={<h1>Public page</h1>}/>
        </Route>
        <Route path="/two" element={<AdminLayout />}>
          <Route index element={<h1>Admin page</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
