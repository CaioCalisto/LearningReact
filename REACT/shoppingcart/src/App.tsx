import { Routes, Route } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { useTranslation } from 'react-i18next';

function App() {
  useTranslation();

  return (
    <ShoppingCartProvider>
      <Navbar />
      
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
    )
}

export default App
