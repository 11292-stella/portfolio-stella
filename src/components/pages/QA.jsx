import { Container, Row, Col, Card } from "react-bootstrap"
import { qaStats, testingActivities, caseStudies } from "../../data/qaData"
import "../../styles/home.css"

const QA = function () {
  return (
    <div className="d-flex flex-column min-vh-100 home-color">
      <Container className="flex-grow-1 py-5">

        {/* ── HERO SEZIONE ─────────────────────────────────────────────────── */}
        <section id="qa-hero" className="mt-5">
          <h1 className="text-center">🔍 QA Experience</h1>
          <p className="text1 text-center mt-2">
            Analisi su sistemi reali: bug documentati, regressioni verificate, fix confermati.
          </p>
        </section>

        {/* ── STATISTICHE ──────────────────────────────────────────────────── */}
        <section id="qa-stats">
          <Row className="justify-content-center mt-4 g-4">
            {qaStats.map((stat, index) => (
              <Col key={index} xs={6} md={3}>
                <div
                  className="p-4 rounded-4 shadow-lg border border-secondary text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    style={{
                      fontFamily: "'Emilys Candy', serif",
                      fontSize: "2.8rem",
                      fontWeight: "bolder",
                      color: "rgb(151, 208, 244)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-light mt-2 mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        {/* ── ATTIVITÀ DI TESTING ──────────────────────────────────────────── */}
        <section id="testing-activities">
          <div
            className="mt-5 rounded-4 shadow-lg border border-secondary p-4"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <h5
              className="text-info mb-4"
              style={{ fontFamily: "'Emilys Candy', serif", fontSize: "1.5rem" }}
            >
              🧪 Attività di Testing
            </h5>
            <Row className="g-3">
              {testingActivities.map((item, index) => (
                <Col key={index} md={4} sm={6}>
                  <div
                    className="d-flex align-items-start gap-3 p-3 rounded-3 border border-secondary h-100"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      fontFamily: "'Mystery Quest', system-ui",
                    }}
                  >
                    <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                    <div>
                      <p
                        className="text-info mb-1 fw-bold text2"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-white mb-0 text2"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
        <section id="case-studies">
          <h2 className="text-center mt-5">🔬 Case Studies</h2>
          <p className="text1 text-center mt-2">
            Tre investigazioni concrete su bug reali di produzione.
          </p>
          <Row className="justify-content-center mt-4 g-4">
            {caseStudies.map((study, index) => (
              <Col key={index} lg={4} md={6} className="d-flex">
                <Card
                  className="h-100 p-4 rounded-4 shadow-lg border border-secondary text-light"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    transition: "transform 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)"
                    e.currentTarget.style.borderColor = "rgb(151, 208, 244)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.borderColor = ""
                  }}
                >
                  <Card.Body className="d-flex flex-column">
                    <span
                      className={`badge bg-${study.badge} mb-3 align-self-start`}
                      style={{ fontFamily: "'Mystery Quest', system-ui", letterSpacing: "0.1em" }}
                    >
                      {study.tipo}
                    </span>

                    <Card.Title
                      style={{
                        fontFamily: "'Emilys Candy', serif",
                        fontSize: "1.4rem",
                        color: "rgb(151, 208, 244)",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                      }}
                    >
                      {study.title}
                    </Card.Title>

                    <div
                      className="mt-3 d-flex flex-column gap-3"
                      style={{ fontFamily: "'Mystery Quest', system-ui", fontSize: "0.9rem" }}
                    >
                      <div>
                        <span className="text-danger text2 fw-bold" style={{ letterSpacing: "0.1em" }}>
                          🐛 Problema:{" "}
                        </span>
                        <span className="text2" style={{ letterSpacing: "0.1em" }}>{study.problema}</span>
                      </div>
                      <div>
                        <span className="text-danger text2 fw-bold" style={{ letterSpacing: "0.1em" }}>
                          🔎 Causa:{" "}
                        </span>
                        <span className="text2" style={{ letterSpacing: "0.1em" }}>{study.causa}</span>
                      </div>
                      <div>
                        <span className="text-warning text2 fw-bold" style={{ letterSpacing: "0.1em" }}>
                          🛠️ Tool usati:{" "}
                        </span>
                        <span className="text-info text2" style={{ letterSpacing: "0.1em" }}>{study.tool}</span>
                      </div>
                      <div className="mt-auto pt-2 border-top border-secondary">
                        <span className="text-success text2 fw-bold" style={{ letterSpacing: "0.1em" }}>
                          📄 Output:{" "}
                        </span>
                        <span className="text2" style={{ letterSpacing: "0.1em" }}>{study.output}</span>
                      </div>
                    </div>
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

export default QA
