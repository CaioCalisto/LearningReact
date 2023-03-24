import { Routes, Route } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  pt: { nativeName: 'Portuguese' }
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <ShoppingCartProvider>
      <Navbar />
      <div>
          {Object.keys(lngs).map((lng) => (
            <Button key={lng} onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </Button>
          ))}
        </div>
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
