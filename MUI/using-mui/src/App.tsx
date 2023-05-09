import { Route, Routes } from "react-router-dom"
import Buttons from "./components/Buttons"
import Home from "./components/Home"
import BasicLayout from "./layouts/BasicLayout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />}/>
        <Route path="/buttons" element={<Buttons />}/>
      </Route>
    </Routes>
  )
}

export default App
