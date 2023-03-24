import { Routes, Route } from "react-router-dom"
import { Button, Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { useTranslation, Trans } from 'react-i18next';

interface Language {
  code: string,
  nativeName: string
}

const languages: Language[] = [
  { code: 'pt', nativeName: 'Portuguese'},
  { code: 'en', nativeName: 'English'}
]

function App() {
  const { t, i18n } = useTranslation();

  return (
    <ShoppingCartProvider>
      <Navbar />
      {languages.map(language => (
        <Button key={language.code} onClick={() => i18n.changeLanguage(language.code)}>
          {language.nativeName}
        </Button>
      ))}
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
