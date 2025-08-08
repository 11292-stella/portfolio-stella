import { Container, Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "../styles/contatti.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

const Contatti = function () {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 contatti-color">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center mt-5">
            <Col md={6} className="mt-0 mt-md-3 mt-lg-0">
              <div className="image-wrapper">
                <Card className="cards2">
                  <Card.Body>
                    <Card.Title className="titolo text-center mb-4">
                      Dove trovarmi
                    </Card.Title>
                    <Card.Text className="text-center">
                      <div className="mb-3">
                        <a
                          href="https://github.com/11292-stella"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link d-flex align-items-center justify-content-center"
                        >
                          <i
                            className="fab fa-github"
                            style={{ fontSize: "24px", color: "#ffffff" }}
                          ></i>
                          <span className="ms-2">GitHub</span>
                        </a>
                      </div>
                      <div className="mb-3">
                        <a
                          href="https://www.linkedin.com/in/stella-marucelli-0992081a3/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link d-flex align-items-center justify-content-center"
                        >
                          <i
                            className="fab fa-linkedin"
                            style={{ fontSize: "24px", color: "#ffffff" }}
                          ></i>
                          <span className="ms-2">LinkedIn</span>
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:stella.marucelli@gmail.com"
                          className="contact-link d-flex align-items-center justify-content-center"
                        >
                          <i
                            className="fas fa-envelope"
                            style={{ fontSize: "24px", color: "#ffffff" }}
                          ></i>
                          <span className="ms-2">
                            stella.marucelli@gmail.com
                          </span>
                        </a>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          {/* Testo conclusivo sotto la card */}
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <p className="text-light text-center text1">
                Non sono un genio del codice, <br /> non ho vinto hackathon, e
                non ho creato l'app che rivoluziona il mondo (ancora). <br />{" "}
                <br /> Ma ho una gran voglia di imparare, <br />
                migliorare e fare la mia parte. <br /> <br /> Questo portfolio è
                il frutto di tante ore di studio, <br /> qualche crisi
                esistenziale,
                <br /> perdita dell'uso di arti superiori e molto caffè <br />{" "}
                <br /> Cerco un lavoro dove possa crescere, <br />
                contribuire e " diciamolo " guadagnare abbastanza <br /> per
                pagare l'affitto <br /> e magari concedermi una pizza ogni tanto
                🍕. <br /> <br /> Se cerchi qualcuno che non sa tutto ma vuole
                sapere di più ogni giorno, eccomi qua.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contatti
