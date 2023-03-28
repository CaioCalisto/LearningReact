import './App.css'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { RQSuperheroes } from './pages/RQSuperheroes'
import { Superheroes } from './pages/Superheroes'
import { RQSuperHero } from './pages/RQSuperHero'
import { ParallelQueries } from './pages/ParallelQueries'
import { DynamicParallel } from './pages/DynamicParallel'
import { DependentQueries } from './pages/DependentsQueries'
import { PaginatedQueries } from './pages/PaginatedQueries'

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
            <Link to='/rq-parallel'>RQ Parallel</Link>
          </li>
          <li>
            <Link to='/rq-dynamic-parallel'>RQ Dynamic Parallel</Link>
          </li>
          <li>
            <Link to='/rq-dependent-queries'>RQ Dependent Parallel</Link>
          </li>
          <li>
            <Link to='/rq-paginated-queries'>RQ Paginated Parallel</Link>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/rq-paginated-queries" element={<PaginatedQueries email="caio@gmail.com" />}></Route>
          <Route path="/rq-dependent-queries" element={<DependentQueries email="caio@gmail.com" />}></Route>
          <Route path="/rq-dynamic-parallel" element={<DynamicParallel heroIds={[1,3]} />}></Route>
          <Route path="/rq-parallel" element={<ParallelQueries />}></Route>
          <Route path="/rq-super-heroes" element={<RQSuperheroes />}></Route>
          <Route path="/super-heroes" element={<Superheroes />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />}></Route>
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
