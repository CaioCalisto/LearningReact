
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { RQSuperheroes } from './pages/RQSuperheroes'
import { Superheroes } from './pages/Superheroes'

function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/super-heroes'>Traditional Super Heroes</Link>
        </li>
        <li>
          <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
        </li>
      </ul>
    </nav>
      <Routes>
          <Route path="/rq-super-heroes" element={<RQSuperheroes />}></Route>
          <Route path="/super-heroes" element={<Superheroes />}></Route>
          <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
