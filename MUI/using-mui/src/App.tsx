import { Route, Routes } from "react-router-dom"
import Alerts from "./components/Alerts"
import BackDrop from "./components/BackDrop"
import Badges from "./components/Badges"
import Buttons from "./components/Buttons"
import CustomButtons from "./components/CustomButtons"
import Home from "./components/Home"
import Snackbars from "./components/Snackbars"
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
        <Route path="/badges" element={<Badges />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/backdrop" element={<BackDrop />} />
        <Route path="/snackbar" element={<Snackbars />} />
      </Route>
    </Routes>
  )
}

export default App
