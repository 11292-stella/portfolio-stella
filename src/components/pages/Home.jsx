import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "../../styles/home.css"

const techLogos = [
  "/logo/l11-Photoroom.png", "/logo/l10-Photoroom.png", "/logo/l9-Photoroom.png",
  "/logo/l8-Photoroom.png",  "/logo/l7-Photoroom.png",  "/logo/l6-Photoroom.png",
  "/logo/l5-Photoroom.png",  "/logo/l4-Photoroom.png",  "/logo/l3-Photoroom.png",
  "/logo/l2-Photoroom.png",  "/logo/l1-Photoroom.png",  "/logo/11-Photoroom.png",
  "/logo/Flutter_logo.svg.png",
]
const duplicatedTechLogos = [...techLogos, ...techLogos]

const sectionCards = [
  {
    icon: "🧪",
    titolo: "QA & Testing",
    desc: "47+ bug documentati su sistemi enterprise reali. Case studies, security audit, regression e localization testing.",
    badge: "danger",
    badgeText: "8 bug critici",
    route: "/qa",
    cta: "Vedi QA Experience",
  },
  {
    icon: "📋",
    titolo: "Reports & KB Audit",
    desc: "Report completi: XSS injection, i18n volatility, Kiosk UI. Audit di 44 articoli su knowledge base enterprise con mappatura rischi AI.",
    badge: "warning",
    badgeText: "6 report",
    route: "/reports",
    cta: "Vedi Reports",
  },
  {
    icon: "💻",
    titolo: "Progetti",
    desc: "Full stack, frontend, backend, mobile e QA Automation. Da React + Spring Boot a Cypress + GitLab CI/CD.",
    badge: "info",
    badgeText: "23 progetti",
    route: "/projects",
    cta: "Vedi Progetti",
  },
  {
    icon: "📬",
    titolo: "Contatti",
    desc: "Hai un progetto, una proposta o solo voglia di parlare di bug? Scrivimi.",
    badge: "success",
    badgeText: "disponibile",
    route: "/contatti",
    cta: "Scrivimi",
  },
]

const Home = function () {
  const navigate = useNavigate()

  return (
    <div className="d-flex flex-column min-vh-100 home-color">
      <Container className="flex-grow-1 py-5">

        {/* ── HERO / ABOUT ─────────────────────────────────────────────────── */}
        <section id="about">
          <div className="p-4 rounded-4 shadow-lg border mt-5 border-secondary bg-opacity-10">
            <h1 className="text-center mb-4">Ctrl + Me = Portfolio</h1>
            <Row className="align-items-center">
              <Col md={4} className="text-center mb-4 mb-md-0">
                <div className="image-wrapper">
                  <Image
                    src="/io.png"
                    alt="Foto profilo"
                    fluid
                    className="home-img shadow"
                    style={{ maxWidth: "300px" }}
                  />
                </div>
              </Col>
              <Col md={8} className="d-flex flex-column justify-content-center">
                <p className="text-light fs-5">
                  Ex grafica convertita al culto del codice e poi al culto dei bug report.
                  Junior full stack developer con esperienza reale in QA: ho testato sistemi in produzione,
                  trovato crash Android, loop infiniti e localizzazioni ballerine, e li ho documentati tutti
                  con santa pazienza.
                  Di giorno scrivo componenti React e API Spring Boot. Di notte sospetto che ogni software
                  nasconda almeno tre bug critici.
                  Ho studiato Flutter (e sopravvissuto a Dart) e presto tradirò Java con Node.js.
                  Se cerchi una developer che sa costruire e distruggere software con metodo, ci siamo.
                </p>
              </Col>
            </Row>
          </div>
        </section>

        {/* ── TECH STACK ───────────────────────────────────────────────────── */}
        <section id="tech">
          <div className="tech-container mt-5">
            <div className="p-4 rounded-4 shadow-lg border border-secondary bg-opacity-10">
              <h2 className="text-center text-light mb-4">Tech Stack</h2>
              <div className="tech-logos">
                {duplicatedTechLogos.map((logo, index) => (
                  <img key={index} src={logo} alt="Technology Logo" className="tech-logo" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ───────────────────────────────────────────────────────── */}
        <section id="skills">
          <div className="p-4 mt-5 rounded-4 shadow-lg border border-secondary bg-opacity-10">
            <h2 className="text-center text-light mb-4">💪 Skills</h2>
            <Row className="justify-content-center text-center text-light">
              <Col md={4}>
                <h5 className="text-info">Frontend</h5>
                <ul className="list-unstyled">
                  <li>React + Redux</li>
                  <li>Flutter + Riverpod</li>
                  <li>Angular (in corso)</li>
                  <li>Bootstrap / Tailwind CSS</li>
                  <li>Responsive Design</li>
                  <li>UX/UI e ottimizzazione layout</li>
                </ul>
              </Col>
              <Col md={4}>
                <h5 className="text-info">Backend</h5>
                <ul className="list-unstyled">
                  <li>Spring Boot + REST API</li>
                  <li>Autenticazione JWT</li>
                  <li>Gestione Database (PostgreSQL)</li>
                  <li>DTO, Validazioni e Eccezioni custom</li>
                  <li>Invio email e sicurezza base</li>
                </ul>
              </Col>
              <Col md={4}>
  <h5 className="text-info">Testing & QA Automation</h5>
  <ul className="list-unstyled">
    <li>Cypress E2E Testing</li>
    <li>Page Object Model</li>
    <li>GitLab CI/CD (pipeline multi-job)</li>
    <li>Faker.js — dati di test dinamici</li>
    <li>Test Funzionali & di Regressione</li>
    <li>Security Testing (XSS/Injection)</li>
    <li>APK Testing & ADB/Logcat</li>
    <li>Test di Localizzazione (i18n)</li>
  </ul>
</Col>
              
            </Row>
          </div>
        </section>

        {/* ── SECTION CARDS ────────────────────────────────────────────────── */}
        <section id="explore" className="mt-5">
          <h2 className="text-center mb-2">Esplora il Portfolio</h2>
          <p className="text1 text-center mb-5">
            Scegli da dove vuoi iniziare.
          </p>
          <Row className="g-4 justify-content-center">
            {sectionCards.map((card) => (
              <Col key={card.route} lg={3} md={6} className="d-flex">
                <Card
                  className="h-100 p-3 rounded-4 shadow-lg border border-secondary text-light w-100"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    transition: "transform 0.3s ease, border-color 0.3s ease",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(card.route)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)"
                    e.currentTarget.style.borderColor = "rgb(151, 208, 244)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.borderColor = ""
                  }}
                >
                  <Card.Body className="d-flex flex-column text-center">
                    <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{card.icon}</div>
                    <span className={`badge bg-${card.badge} align-self-center mb-3`}>
                      {card.badgeText}
                    </span>
                    <Card.Title
                      style={{
                        fontFamily: "'Emilys Candy', serif",
                        fontSize: "1.4rem",
                        color: "rgb(151, 208, 244)",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                      }}
                    >
                      {card.titolo}
                    </Card.Title>
                    <Card.Text className="text2 mt-2" style={{ fontSize: "0.9rem", letterSpacing: "0.04em", lineHeight: "1.6" }}>
                      {card.desc}
                    </Card.Text>
                    <Button
                      variant="outline-info"
                      className="mt-auto"
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate(card.route)
                      }}
                    >
                      {card.cta} →
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

      </Container>
    </div>
  )
}

export default Home
