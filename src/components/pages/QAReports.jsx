import { Container, Row, Col, Card } from "react-bootstrap"
import { qaReports, kbAudits } from "../../data/reportsData"
import "../../styles/home.css"

const kbStats = [
  { value: "44", label: "Articoli Auditati" },
  { value: "3",  label: "Audience Testate" },
  { value: "9",  label: "Articoli Bocciati/Bloccati" },
  { value: "🤖", label: "Rischi AI Mappati" },
]

const QAReports = function () {
  return (
    <div className="d-flex flex-column min-vh-100 home-color">
      <Container className="flex-grow-1 py-5">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section id="reports-hero" className="mt-5">
          <h1 className="text-center">📋 Reports & KB Audit</h1>
          <p className="text1 text-center mt-2">
            Report completi su sessioni di test reali: security audit, localizzazione e validazione UI
            su sistema enterprise in produzione.
          </p>
        </section>

        {/* ── QA REPORTS ───────────────────────────────────────────────────── */}
        <section id="qa-reports">
          <h2 className="text-center mt-5">🧾 QA Reports</h2>
          <Row className="justify-content-center mt-4 g-4">
            {qaReports.map((report) => (
              <Col key={report.id} lg={4} md={6} className="d-flex">
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
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span
                        className="text-muted"
                        style={{ fontFamily: "'Mystery Quest', system-ui", fontSize: "0.75rem", letterSpacing: "0.15em" }}
                      >
                        REPORT #{report.id} · {report.data}
                      </span>
                      <span className={`badge bg-${report.badge}`} style={{ fontSize: "0.7rem" }}>
                        {report.stato}
                      </span>
                    </div>

                    {/* Titolo */}
                    <Card.Title
                      style={{
                        fontFamily: "'Emilys Candy', serif",
                        fontSize: "1.2rem",
                        color: "rgb(151, 208, 244)",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                        lineHeight: "1.4",
                      }}
                    >
                      {report.titolo}
                    </Card.Title>
                    <p
                      className="text-muted mb-3"
                      style={{ fontSize: "0.8rem", fontFamily: "'Mystery Quest', system-ui" }}
                    >
                      {report.sistema}
                    </p>

                    {/* Sintesi */}
                    <p className="text2" style={{ fontSize: "0.88rem", letterSpacing: "0.05em", lineHeight: "1.6" }}>
                      {report.sintesi}
                    </p>

                    {/* Bug aperti */}
                    <div className="mt-3">
                      <p className="text-warning fw-bold text2 mb-2" style={{ letterSpacing: "0.1em", fontSize: "0.85rem" }}>
                        🐛 Bug principali rilevati:
                      </p>
                      {report.bugsAperti.map((bug, i) => (
                        <div key={i} className="d-flex align-items-start gap-2 mb-1">
                          <span
                            style={{ fontSize: "0.75rem", minWidth: "70px", color: "rgba(255,255,255,0.5)", fontFamily: "'Mystery Quest', system-ui" }}
                          >
                            {bug.severita}
                          </span>
                          <span className="text2" style={{ fontSize: "0.8rem", letterSpacing: "0.04em" }}>
                            <span className="text-info">{bug.area}:</span> {bug.desc}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Attività svolte */}
                    <div className="mt-3 pt-3 border-top border-secondary">
                      <p className="text-success fw-bold text2 mb-2" style={{ letterSpacing: "0.1em", fontSize: "0.85rem" }}>
                        ✅ Attività svolte:
                      </p>
                      <div className="d-flex flex-wrap gap-1">
                        {report.attivita.map((att, i) => (
                          <span
                            key={i}
                            className="badge rounded-pill border border-secondary text2"
                            style={{ backgroundColor: "rgba(255,255,255,0.06)", fontSize: "0.72rem", letterSpacing: "0.04em" }}
                          >
                            {att}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* ── KB AUDIT ─────────────────────────────────────────────────────── */}
        <section id="kb-audit">
          <h2 className="text-center mt-5">📚 KB Audit</h2>
          <p className="text1 text-center mt-2">
            Audit della knowledge base di un gestionale enterprise: verifica di accuratezza,
            target audience e impatto sull'assistente AI integrato.
          </p>

          {/* Stats */}
          <Row className="justify-content-center mt-4 g-3">
            {kbStats.map((s, i) => (
              <Col key={i} xs={6} md={3}>
                <div
                  className="p-3 rounded-4 shadow-lg border border-secondary text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    style={{
                      fontFamily: "'Emilys Candy', serif",
                      fontSize: "2.2rem",
                      fontWeight: "bolder",
                      color: "rgb(151, 208, 244)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                    }}
                  >
                    {s.value}
                  </div>
                  <p className="text-light mt-1 mb-0" style={{ fontSize: "0.85rem" }}>{s.label}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Card audit */}
          <Row className="justify-content-center mt-4 g-4">
            {kbAudits.map((audit) => (
              <Col key={audit.id} lg={4} md={6} className="d-flex">
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
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <span
                        className="text-muted"
                        style={{ fontFamily: "'Mystery Quest', system-ui", fontSize: "0.75rem", letterSpacing: "0.15em" }}
                      >
                        AUDIT #{audit.id} · {audit.data}
                      </span>
                      <span className={`badge bg-${audit.badge}`} style={{ fontSize: "0.7rem" }}>
                        {audit.articoli} articoli
                      </span>
                    </div>

                    {/* Titolo */}
                    <Card.Title
                      style={{
                        fontFamily: "'Emilys Candy', serif",
                        fontSize: "1.25rem",
                        color: "rgb(151, 208, 244)",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                      }}
                    >
                      {audit.titolo}
                    </Card.Title>
                    <p
                      className="text-muted mb-3"
                      style={{ fontSize: "0.8rem", fontFamily: "'Mystery Quest', system-ui" }}
                    >
                      {audit.sistema}
                    </p>

                    {/* Risultati pill */}
                    <div className="d-flex gap-2 flex-wrap mb-3">
                      <span className="badge bg-success rounded-pill">✅ {audit.risultati.ok} OK</span>
                      <span className="badge bg-warning text-dark rounded-pill">⚠️ {audit.risultati.avvisi} Correzioni</span>
                      <span className="badge bg-danger rounded-pill">❌ {audit.risultati.bocciati} Bocciati</span>
                      {audit.risultati.bloccati > 0 && (
                        <span className="badge bg-secondary rounded-pill">🔒 {audit.risultati.bloccati} Bloccati</span>
                      )}
                    </div>

                    {/* Criticità */}
                    <div className="mt-2">
                      <p className="text-warning fw-bold text2 mb-2" style={{ letterSpacing: "0.1em", fontSize: "0.85rem" }}>
                        ⚠️ Criticità principali:
                      </p>
                      {audit.critiche.map((c, i) => (
                        <div
                          key={i}
                          className="mb-2 p-2 rounded-3 border border-secondary"
                          style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                        >
                          <p className="text-info fw-bold mb-1 text2" style={{ fontSize: "0.8rem", letterSpacing: "0.06em" }}>
                            {c.label}
                          </p>
                          <p className="mb-0 text2" style={{ fontSize: "0.78rem", letterSpacing: "0.04em", lineHeight: "1.5" }}>
                            {c.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Output */}
                    <div className="mt-auto pt-3 border-top border-secondary">
                      <p className="text-success fw-bold text2 mb-1" style={{ letterSpacing: "0.1em", fontSize: "0.85rem" }}>
                        📄 Output prodotto:
                      </p>
                      <p className="text2" style={{ fontSize: "0.8rem", letterSpacing: "0.04em", lineHeight: "1.6" }}>
                        {audit.output}
                      </p>
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

export default QAReports
