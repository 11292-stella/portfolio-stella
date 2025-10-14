import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useForm, ValidationError } from "@formspree/react"
import "../styles/contatti.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

const Contatti = function () {
  const [state, handleSubmit] = useForm("mqaygord")

  return (
    <>
      <div className="d-flex flex-column min-vh-100 contatti-color">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center mt-5">
            <Col md={8} className="mt-0 mt-md-3 mt-lg-0">
              <Card className="p-4 rounded-4 shadow-lg border border-secondary bg-opacity-10 text-light">
                <Card.Body>
                  <Card.Title className="text-center mb-4 fs-3">
                    Troviamoci
                  </Card.Title>

                  {/* Link GitHub, LinkedIn, Email */}
                  <Row className="justify-content-center text-center mb-4">
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
                        <span className="ms-2 ">LinkedIn</span>
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

                  {/* CV e Profilo Epicode */}
                  <div className="d-flex flex-column flex-md-row justify-content-around mt-4 text-center">
                    <div className="mb-4 mb-md-0">
                      <img
                        src="/cv.png"
                        alt="CV"
                        className="img-fluid mb-3"
                        style={{ maxWidth: "150px" }}
                      />
                      <h5 className="h5">CV Interattivo</h5>
                      <p>Per conoscermi oltre il PDF.</p>
                      <Button
                        href="https://cv-stella-marucelli.vercel.app/"
                        target="_blank"
                        variant="outline-info"
                        className="mt-2"
                      >
                        Vai al CV
                      </Button>
                    </div>

                    <div>
                      <img
                        src="/pf.png"
                        alt="Profilo Epicode"
                        className="img-fluid mb-3"
                        style={{ maxWidth: "150px" }}
                      />
                      <h5 className="h5">Profilo Epicode</h5>
                      <p>Il mio percorso formativo completo.</p>
                      <Button
                        href="https://talent.epicode.com/talent/549fd8c5-b132-433a-8a03-c38daf4a8960"
                        target="_blank"
                        variant="outline-info"
                        className="mt-2"
                      >
                        Vai al profilo
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="p-5 rounded-4 shadow-lg border border-secondary bg-opacity-10 text-light mt-5">
                <Row className="g-4 flex-column flex-md-row align-items-center">
                  <Col md={8}>
                    <div className="text1 pe-md-4">
                      <h4 className="mb-4 fw-bold">Un CV, una storia</h4>
                      <p className="mb-4">
                        Non sono un genio del codice,
                        <br />
                        non ho vinto hackathon,
                        <br />e non ho creato l'app che rivoluziona il mondo
                        (ancora).
                      </p>
                      <p className="mb-4">
                        Ma ho una gran voglia di imparare,
                        <br />
                        migliorare e fare la mia parte.
                      </p>
                      <p className="mb-4">
                        Questo portfolio è il frutto di tante ore di studio,
                        <br />
                        qualche crisi esistenziale,
                        <br />
                        perdita temporanea dell’uso di arti superiori
                        <br />e molto caffè.
                      </p>
                      <p className="mb-4">
                        Cerco un lavoro dove possa crescere, contribuire
                        <br />
                        e diciamolo: guadagnare abbastanza
                        <br />
                        per pagare l’affitto e concedermi una pizza ogni tanto
                        🍕.
                      </p>
                      <p className="mb-4">
                        Sono aperta a opportunità in tutta Italia:
                        <br />
                        Roma, Milano, Firenze,
                        <br />o anche il paesino sperduto dove il Wi-Fi prende
                        solo se stai in diagonale.
                      </p>
                      <p className="mb-0">
                        Se cerchi qualcuno che non sa tutto
                        <br />
                        ma vuole sapere di più ogni giorno, eccomi qua.
                      </p>
                    </div>
                  </Col>

                  <Col md={4} className="text-center">
                    <div className="cv-download-circle d-flex flex-column align-items-center justify-content-center h-100">
                      <a
                        href="/Stella-Marucelli-CV.pdf"
                        download
                        className="btn btn-outline-info rounded-circle d-inline-flex align-items-center justify-content-center pulse"
                        style={{
                          width: "120px",
                          height: "120px",
                          fontSize: "36px",
                        }}
                        title="Scarica il CV in PDF"
                      >
                        <i className="fas fa-file-download"></i>
                      </a>
                      <p className="mt-3 text-light fw-semibold fs-5">CV PDF</p>
                    </div>
                  </Col>
                </Row>
              </Card>

              {/* Form di contatto */}
              <Card className="p-4 rounded-4 shadow-lg border border-secondary bg-opacity-10 text-light mt-5">
                <Card.Body>
                  <Card.Title className="text-center mb-4 fs-4">
                    Scrivimi
                  </Card.Title>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        La tua email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        required
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Messaggio
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows="5"
                        required
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="btn btn-outline-info"
                      >
                        Invia
                      </button>
                    </div>

                    {state.succeeded && (
                      <p className="mt-3 text-light text-center">
                        Grazie per il messaggio! Ti risponderò presto.
                      </p>
                    )}
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Contatti
