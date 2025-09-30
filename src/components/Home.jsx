import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Carousel,
  Button,
} from "react-bootstrap"
import "../styles/home.css"

const Home = function () {
  const progetti = [
    {
      id: 1,
      categoria: "fullstack",
      titolo: "Sneaky Workout",
      descrizione:
        "App per allenarsi di nascosto durante il lavoro. Frontend React, backend Spring Boot.",
      immagine: "/img/sneakyworkout.png",
      video: "/video/sneky.mp4",
      tecnologie: "React, Spring Boot, PostgreSQL",
      repo: "https://github.com/11292-stella/AppWeb-Sneacky-Workout",
      link: "https://sneakyworkout.koyeb.app",
    },
    {
      id: 2,
      titolo: "DevGuide",
      immagine: "/pp.png",
      descrizione:
        "Guida pratica e personale per ripassare concetti chiave dello sviluppo web. Leggera, utile e con un pizzico di ironia.",
      tecnologie: "React, Bootstrap",
      link: "https://dev-guide-liart.vercel.app/home",
      categoria: "frontend",
    },
    {
      id: 3,
      titolo: "Music play",
      immagine: "/2p.png",
      descrizione:
        "Web app frontend con focus sulla gestione dello stato tramite Redux.",
      tecnologie: "React, Redux, Bootstrap",
      link: "https://lastproject-main.vercel.app/#home",
      categoria: "frontend",
    },
    {
      id: 4,
      titolo: "Citywide weather",
      immagine: "/3p.png",
      descrizione:
        "Web app meteo in tempo reale con chiamate API e gestione dello stato.",
      tecnologie: "React, Bootstrap, APIs",
      link: "https://nuovpro.vercel.app/",
      categoria: "frontend",
    },
    {
      id: 5,
      titolo: "Libreria Horror",
      immagine: "/4p.png",
      descrizione:
        "Vetrina digitale dedicata ai libri dell’orrore. HTML, CSS e un pizzico di JavaScript.",
      tecnologie: "HTML5, CSS3, JavaScript",
      link: "https://h-r7wd-stellas-projects-76eb7045.vercel.app/",
      categoria: "frontend",
    },
    {
      id: 6,
      titolo: "Netflix Clone",
      immagine: "/5p.png",
      descrizione:
        "Web app ispirata a Netflix, con React e chiamate API per esplorare design e interfaccia.",
      tecnologie: "React, Bootstrap, APIs",
      link: "https://w8project-2k6o.vercel.app/",
      categoria: "frontend",
    },
    {
      id: 7,
      titolo: "Cartoon Bistro",
      immagine: "/p6.png",
      descrizione:
        "Sito vetrina per un ristorante immaginario ispirato ai cartoni animati.",
      tecnologie: "HTML5, CSS3, Bootstrap",
      link: "https://week6-day2.vercel.app/#",
      categoria: "frontend",
    },
    {
      id: 8,
      titolo: "Animazioni in Azione",
      immagine: "/7p.png",
      descrizione:
        "Primo esperimento con animazioni CSS: transizioni, trasformazioni e piccoli effetti dinamici.",
      tecnologie: "HTML5, CSS3",
      link: "https://w5d4-xqcw-stellas-projects-76eb7045.vercel.app/",
      categoria: "frontend",
    },
    {
      id: 9,
      titolo: "Play to Mamory",
      immagine: "/8p.png",
      descrizione:
        "Primo progetto JavaScript: interazioni, logica e piccoli script per rendere la pagina dinamica.",
      tecnologie: "HTML5, CSS3, JavaScript",
      link: "https://mio-progetto-theta.vercel.app/",
      categoria: "frontend",
    },
    // Esempio backend da aggiungere
    {
      id: 1,
      categoria: "backend",
      titolo: "Invio dati Gmail",
      descrizione: "Backend per invio email con Spring Boot e validazione DTO.",
      immagine: "/img/inviodatigmail.png", // verrà mostrata solo se video non presente
      video: "/video/inviodatigmail.mp4", // se presente, sostituisce l'immagine
      tecnologie: "Spring Boot, JavaMailSender",
      repo: "https://github.com/11292-stella/Invio_dati_gmail",
    },
  ]

  const fullstackProjects = progetti.filter((p) => p.categoria === "fullstack")
  const frontendProjects = progetti.filter((p) => p.categoria === "frontend")
  const backendProjects = progetti.filter((p) => p.categoria === "backend")

  const renderProjects = (projects) => (
    <Row className="justify-content-center mt-4 g-4">
      {projects.map((progetto) => (
        <Col lg={4} md={6} key={progetto.id} className="d-flex">
          <Card className="project-card h-100 p-3 rounded-4 shadow-lg border border-secondary bg-opacity-10 text-light">
            {/* VIDEO o IMMAGINE */}
            <div className="card-img-container mb-3">
              {progetto.video ? (
                <div className="ratio ratio-16x9">
                  {progetto.video.includes("youtube") ? (
                    <iframe
                      src={progetto.video}
                      title={`Demo ${progetto.titolo}`}
                      allowFullScreen
                      style={{ borderRadius: "12px" }}
                    ></iframe>
                  ) : (
                    <video
                      controls
                      style={{ borderRadius: "12px", width: "100%" }}
                    >
                      <source src={progetto.video} type="video/mp4" />
                      Il tuo browser non supporta il video.
                    </video>
                  )}
                </div>
              ) : (
                <Card.Img
                  variant="top"
                  src={progetto.immagine}
                  alt={progetto.titolo}
                  className="card-img-top rounded-3"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
              )}
            </div>

            <Card.Body className="d-flex flex-column">
              <Card.Title className="card-title fs-4 text-center">
                {progetto.titolo}
              </Card.Title>

              <Card.Text className="card-text text-center">
                {progetto.descrizione}
              </Card.Text>

              <div className="card-techs mt-auto text-center">
                <span className="badge bg-info text-dark">
                  {progetto.tecnologie}
                </span>
              </div>

              {/* BOTTONI */}
              <div className="d-flex justify-content-center gap-2 mt-3">
                {progetto.repo && (
                  <Button
                    href={progetto.repo}
                    target="_blank"
                    className="btn-project"
                    variant="outline-info"
                  >
                    Vai alla repository
                  </Button>
                )}
                {progetto.link && (
                  <Button
                    href={progetto.link}
                    target="_blank"
                    className="btn-project"
                    variant="outline-light"
                  >
                    Vai al progetto
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )

  const techLogos = [
    "/logo/l11-Photoroom.png",
    "/logo/l10-Photoroom.png",
    "/logo/l9-Photoroom.png",
    "/logo/l8-Photoroom.png",
    "/logo/l7-Photoroom.png",
    "/logo/l6-Photoroom.png",
    "/logo/l5-Photoroom.png",
    "/logo/l4-Photoroom.png",
    "/logo/l3-Photoroom.png",
    "/logo/l2-Photoroom.png",
    "/logo/l1-Photoroom.png",
    "/logo/11-Photoroom.png",
  ]

  const duplicatedTechLogos = [...techLogos, ...techLogos]

  return (
    <>
      <div className="d-flex flex-column min-vh-100 home-color">
        <Container className="flex-grow-1 py-5">
          <div className="p-4 rounded-4 shadow-lg border mt-5 border-secondary bg-opacity-10">
            <h1 className="text-center mb-4">Ctrl + Me = Portfolio</h1>

            <Row className="align-items-center">
              <Col md={4} className="text-center mb-4 mb-md-0">
                <div className="image-wrapper">
                  <Image
                    src="/io.png"
                    alt="Descrizione immagine"
                    fluid
                    className="home-img shadow"
                    style={{ maxWidth: "300px" }}
                  />
                </div>
              </Col>

              <Col md={8} className="d-flex flex-column justify-content-center">
                <p className="text-light fs-5">
                  Ex grafica convertita al culto del codice. Junior full stack
                  developer con una passione per layout responsive, componenti
                  riutilizzabili e meme tecnici. <br />
                  Ho lasciato il mondo della stampa per abbracciare React, Java
                  e le gioie del debugging. <br />
                  Sto studiando Angular (con pazienza zen) e presto tradirò
                  Bootstrap con Tailwind. <br />
                  Se cerchi una developer che sa scrivere codice e anche riderci
                  sopra, ci siamo.
                </p>
              </Col>
            </Row>
          </div>

          <div className="tech-container">
            <div className="p-4 rounded-4 shadow-lg border border-secondary bg-opacity-10">
              <h2 className="text-center text-light mb-4">Tech Stack</h2>
              <div className="tech-logos">
                {duplicatedTechLogos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt="Technology Logo"
                    className="tech-logo"
                  />
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-center mt-5">
            Qui è dove le idee prendono forma
          </h2>
          <p className="text-light mb-4 text-center text1">
            Questi sono alcuni dei progetti che ho sviluppato per mettere in
            pratica ciò che ho imparato e sperimentare nuove soluzioni.
          </p>

          <div className="d-flex flex-column min-vh-100 home-color">
            <Container className="flex-grow-1 py-5">
              <h2 className="text-center mt-5">🔥 Progetti Full Stack</h2>
              {renderProjects(fullstackProjects)}

              <h2 className="text-center mt-5">🎨 Progetti Frontend</h2>
              {renderProjects(frontendProjects)}

              <h2 className="text-center mt-5">
                😈 Il mio lato oscuro: Java & Back-End
              </h2>
              <p className=" text-light mt-4 text-center text1">
                Ebbene sì… ho un lato oscuro. <br /> Dopo aver giocato con
                colori, animazioni e layout scintillanti, ho deciso di esplorare
                il back-end. <br />E cosa c’è di più oscuro, misterioso e
                affascinante del Java? <br />
                Il back-end è come una creatura notturna: lavora dietro le
                quinte, lontano dai riflettori, <br /> in un mondo fatto di
                logica, server e database. <br /> Non si mostra facilmente… ma
                lascia tracce.
              </p>

              {renderProjects(backendProjects)}
            </Container>
          </div>
        </Container>
      </div>
    </>
  )
}
export default Home
