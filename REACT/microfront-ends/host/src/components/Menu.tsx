import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const Menu = () => {
  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/consumer" as={NavLink}>
            Consumer
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}