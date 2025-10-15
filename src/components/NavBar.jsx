import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useNavigate, useLocation } from "react-router-dom"
import "../styles/navbar.css"
import { useState, useEffect } from "react"

const NavBar = function () {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // cambia colore navbar allo scroll
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

  // funzione per gestire lo scroll alle sezioni
  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/home") {
      // se non siamo in home, navighiamo lì prima
      navigate("/home")
      setExpanded(false)
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 500) // piccolo delay per dare tempo al DOM di caricare
    } else {
      // se siamo già in home
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
      setExpanded(false)
    }
  }

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
        <Navbar.Brand
          onClick={() => handleScrollToSection("home")}
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
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
              className="text1"
              onClick={() => handleScrollToSection("about")}
            >
              About me
            </Nav.Link>

            <Nav.Link
              className="text1"
              onClick={() => handleScrollToSection("tech")}
            >
              Tech
            </Nav.Link>
            <Nav.Link
              className="text1"
              onClick={() => handleScrollToSection("skills")}
            >
              Skill
            </Nav.Link>

            <Nav.Link
              className="text1"
              onClick={() => handleScrollToSection("projects")}
            >
              Progetti
            </Nav.Link>

            <Nav.Link className="text1" onClick={() => navigate("/contatti")}>
              Contatti
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
