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
  nativeName: string,
  flag: string
}

const languages: Language[] = [
  { code: 'pt', nativeName: 'Portuguese', flag: 'src/assets/pt_flag.svg' },
  { code: 'en', nativeName: 'English', flag: 'src/assets/us_flag.svg' }
]

function App() {
  const { t, i18n } = useTranslation();

  return (
    <ShoppingCartProvider>
      <Navbar />
      {languages.map(language => (
        <span key={language.code} onClick={() => i18n.changeLanguage(language.code)}>
          <img src={language.flag} style={{ 
          width: "50px", 
          height: "25px", 
          objectFit: "cover" 
        }}/>
        </span>
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
