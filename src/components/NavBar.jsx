import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"
import "../styles/navbar.css"

const NavBar = function () {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="navColor sticky-top">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="/logo.png"
              width="70"
              height="60"
              className="d-inline-block align-middle"
              alt=""
            />
            <span className="ms-5 tit text-info navLogoText">Div & Dreams</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" className="text1 text-info">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contatti" className="text1 text-info">
                contatti
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
