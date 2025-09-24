import { Container, Row, Col, Card, Button } from "react-bootstrap"
import "../styles/contatti.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

const Contatti = function () {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 contatti-color">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center mt-5">
            <Col md={8} className="mt-0 mt-md-3 mt-lg-0">
              <Card className="cards2">
                <Card.Body>
                  <Card.Title className="titolo text-center mb-4">
                    Troviamoci
                  </Card.Title>

                  <Card.Text className="text-center">
                    <Row className="justify-content-center">
                      <Col xs={12} md={6} lg={4} className="mb-4">
                        <a
                          href="https://github.com/11292-stella"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link d-flex flex-column align-items-center"
                        >
                          <i
                            className="fab fa-github mb-2"
                            style={{ fontSize: "40px", color: "#ffffff" }}
                          ></i>
                          <span className="ms-2">GitHub</span>
                        </a>
                      </Col>
                      <Col xs={12} md={6} lg={4} className="mb-4">
                        <a
                          href="https://www.linkedin.com/in/stella-marucelli-0992081a3/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link d-flex flex-column align-items-center"
                        >
                          <i
                            className="fab fa-linkedin mb-2"
                            style={{ fontSize: "40px", color: "#ffffff" }}
                          ></i>
                          <span className="ms-2">LinkedIn</span>
                        </a>
                      </Col>
                      <Col xs={12} md={6} lg={4} className="mb-4">
                        <a
                          href="mailto:stella.marucelli@gmail.com"
                          className="contact-link d-flex flex-column align-items-center"
                        >
                          <i
                            className="fas fa-envelope mb-2"
                            style={{ fontSize: "40px", color: "#ffffff" }}
                          ></i>
                          <span className="ms-2">Email</span>
                        </a>
                      </Col>
                    </Row>
                    <hr className="my-4" />
                    {/* CV e profilo Epicode */}
                    <div className="d-flex flex-column flex-md-row justify-content-around mt-4">
                      {/* Card per il CV Interattivo */}
                      <div className="text-center mb-4 mb-md-0">
                        <img
                          src="/cv.png"
                          alt="CV"
                          className="img-fluid"
                          style={{ maxWidth: "150px" }}
                        />
                        <h5 className="mt-3">CV Interattivo</h5>
                        <p className="card-text">
                          Per conoscermi oltre il PDF.
                        </p>
                        <Button
                          href="https://cv-stella-marucelli.vercel.app/"
                          target="_blank"
                          variant="info"
                          className="bot mt-2"
                        >
                          Vai al CV
                        </Button>
                      </div>

                      {/* Card per il Profilo Epicode */}
                      <div className="text-center">
                        <img
                          src="/pf.png"
                          alt="Profilo Epicode"
                          className="img-fluid"
                          style={{ maxWidth: "150px" }}
                        />
                        <h5 className="mt-3">Profilo Epicode</h5>
                        <p className="card-text">
                          Il mio percorso formativo completo.
                        </p>
                        <Button
                          href="https://talent.epicode.com/talent/549fd8c5-b132-433a-8a03-c38daf4a8960"
                          target="_blank"
                          variant="info"
                          className="bot mt-2"
                        >
                          Vai al profilo
                        </Button>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>

              {/* Testo conclusivo sotto la card */}
              <p className="text-light text-center text1 mt-4">
                Non sono un genio del codice, <br />
                non ho vinto hackathon, e non ho creato l'app che rivoluziona il
                mondo (ancora). <br />
                <br />
                Ma ho una gran voglia di imparare, migliorare e fare la mia
                parte. <br />
                <br />
                Questo portfolio è il frutto di tante ore di studio, <br />
                qualche crisi esistenziale, perdita temporanea dell’uso di arti
                superiori e molto caffè. <br />
                <br />
                Cerco un lavoro dove possa crescere, contribuire e diciamolo
                guadagnare abbastanza <br />
                per pagare l’affitto e concedermi una pizza ogni tanto 🍕.
                <br />
                <br />
                Sono aperta a opportunità in tutta Italia: Roma, Milano,
                Firenze, o anche il paesino sperduto <br />
                dove il Wi-Fi prende solo se stai in diagonale. <br />
                <br />
                Se cerchi qualcuno che non sa tutto ma vuole sapere di più ogni
                giorno, eccomi qua.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contatti
