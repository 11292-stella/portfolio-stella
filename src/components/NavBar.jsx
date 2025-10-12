import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"
import "../styles/navbar.css"
import { useState, useEffect } from "react"

const NavBar = function () {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`py-3 transition-nav ${
        scrolled || expanded ? "navColor" : "bg-transparent"
      }`}
      aria-label="Navigazione principale"
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="/topo.png"
            width="70"
            height="60"
            className="d-inline-block align-middle"
            alt="Logo Div & Dreams"
          />
          <span className="ms-3 tit text-white navLogoText">Div & Dreams</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/home"
              className="text1"
              activeClassName="active-link"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contatti"
              className="text1"
              activeClassName="active-link"
              onClick={() => setExpanded(false)}
            >
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
