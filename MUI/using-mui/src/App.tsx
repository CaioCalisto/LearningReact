import { Route, Routes } from "react-router-dom"
import Buttons from "./components/Buttons"
import CustomButtons from "./components/CustomButtons"
import Home from "./components/Home"
import TextFields from "./components/TextFields"
import TextFields2 from "./components/TextFields2"
import BasicLayout from "./layouts/BasicLayout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />}/>
        <Route path="/buttons" element={<Buttons />}/>
        <Route path="/custom-buttons" element={<CustomButtons />} />
        <Route path="/text" element={<TextFields />} />
        <Route path="/custom-text" element={<TextFields2 />} />
      </Route>
    </Routes>
  )
}

export default App
