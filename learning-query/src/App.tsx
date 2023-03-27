import './App.css'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { RQSuperheroes } from './pages/RQSuperheroes'
import { Superheroes } from './pages/Superheroes'
import { SuperHero } from './pages/SuperHero'

const queryClient = new QueryClient()

const Menu = (): JSX.Element => {
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
          <li>
            <Link to='/rq-super-hero'>RQ Super Hero by id</Link>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/rq-super-heroes" element={<RQSuperheroes />}></Route>
          <Route path="/super-heroes" element={<Superheroes />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rq-super-hero" element={<SuperHero />}></Route>
      </Routes>
    </BrowserRouter>
    )
}

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Menu />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App
