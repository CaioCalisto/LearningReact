import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

export function Menu() {
  const { t } = useTranslation()

  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            {t('menu.home')}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}