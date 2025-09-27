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
      titolo: "Sneaky Workout",
      immagine: "/1p.png",
      descrizione:
        "Web app full stack per allenamenti personalizzati e motivazionali. Un campo digitale dove disciplina e ironia si incontrano.",
      tecnologie: "React, Bootstrap, Java, Spring Boot",
      link: "https://front-project-personal-trainer.vercel.app/home",
    },
    {
      id: 2,
      titolo: "DevGuide",
      immagine: "/pp.png",
      descrizione:
        "Web app pensata come guida pratica e personale per ripassare concetti chiave dello sviluppo web. Leggera, utile e con un pizzico di ironia.",
      tecnologie: "React, Bootstrap",
      link: "https://dev-guide-liart.vercel.app/home",
    },
    {
      id: 3,
      titolo: "Music play",
      immagine: "/2p.png",
      descrizione:
        "Web app frontend sviluppata per consolidare le competenze acquisite, con focus sulla gestione dello stato tramite Redux.",
      tecnologie: "React, Redux, Bootstrap",
      link: "https://lastproject-main.vercel.app/#home",
    },
    {
      id: 4,
      titolo: "Citywide weather",
      immagine: "/3p.png",
      descrizione:
        "Web app meteo in tempo reale, sviluppata per esplorare React, chiamate API e gestione dello stato. Un primo passo concreto nel mondo frontend.",
      tecnologie: "React, Bootstrap, APIs",
      link: "https://nuovpro.vercel.app/",
    },
    {
      id: 5,
      titolo: "Libreria Horror",
      immagine: "/4p.png",
      descrizione:
        "Vetrina digitale dedicata ai libri dell’orrore, realizzata nei primi passi del mio percorso. HTML, CSS e un pizzico di JavaScript.",
      tecnologie: "HTML5, CSS3, JavaScript",
      link: "https://h-r7wd-stellas-projects-76eb7045.vercel.app/",
    },
    {
      id: 6,
      titolo: "Netflix Clone",
      immagine: "/5p.png",
      descrizione:
        "Web app ispirata a Netflix, sviluppata durante un workshop scolastico. Un esercizio pratico per esplorare React, chiamate API e design dell’interfaccia.",
      tecnologie: "React, Bootstrap, APIs",
      link: "https://w8project-2k6o.vercel.app/",
    },
    {
      id: 7,
      titolo: "Cartoon Bistro",
      immagine: "/p6.png",
      descrizione:
        "Sito vetrina per un ristorante immaginario ispirato ai cartoni animati. Creato durante le prime esperienze con Bootstrap, per esplorare layout responsive e design creativo.",
      tecnologie: "HTML5, CSS3, Bootstrap",
      link: "https://week6-day2.vercel.app/#",
    },
    {
      id: 8,
      titolo: "Animazioni in Azione",
      immagine: "/7p.png",
      descrizione:
        "Primo esperimento con animazioni CSS: transizioni, trasformazioni e piccoli effetti dinamici per rendere gli elementi più vivi e interattivi.",
      tecnologie: "HTML5, CSS3",
      link: "https://w5d4-xqcw-stellas-projects-76eb7045.vercel.app/",
    },
    {
      id: 9,
      titolo: "Play to Mamory",
      immagine: "/8p.png",
      descrizione:
        "Primo progetto JavaScript: interazioni, logica e piccoli script per trasformare una pagina statica in qualcosa di vivo e dinamico.",
      tecnologie: "HTML5, CSS3, JavaScript",
      link: "https://mio-progetto-theta.vercel.app/",
    },
  ]

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

          <Row className="justify-content-center mt-5 g-4">
            {progetti.map((progetto) => (
              <Col lg={4} md={6} key={progetto.id} className="d-flex">
                <Card className="project-card h-100">
                  <div className="card-img-container">
                    <Card.Img
                      variant="top"
                      src={progetto.immagine}
                      alt={progetto.titolo}
                      className="card-img-top"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="card-title">
                      {progetto.titolo}
                    </Card.Title>
                    <Card.Text className="card-text">
                      {progetto.descrizione}
                    </Card.Text>
                    <div className="card-techs mt-auto">
                      <span>{progetto.tecnologie}</span>
                    </div>
                    <Button
                      href={progetto.link}
                      target="_blank"
                      className="btn-project mt-3"
                    >
                      Vai al progetto
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <h2 className="text-center mt-5">
            Il mio lato oscuro: Java & Back-End
          </h2>
          <p className=" text-light mt-4 text-center text1">
            Ebbene sì… ho un lato oscuro. <br /> Dopo aver giocato con colori,
            animazioni e layout scintillanti, ho deciso di esplorare il
            back-end. <br />E cosa c’è di più oscuro, misterioso e affascinante
            del Java? <br />
            Il back-end è come una creatura notturna: lavora dietro le quinte,
            lontano dai riflettori, <br /> in un mondo fatto di logica, server e
            database. <br /> Non si mostra facilmente… ma lascia tracce. <br />{" "}
            <br />
            Se siete curiosi di scoprire cosa si cela nel buio, potete sbirciare
            nel mio{" "}
            <a
              href="https://github.com/11292-stella"
              target="_blank"
              rel="noopener noreferrer"
            >
              repository GitHub
            </a>{" "}
            lì troverete i miei esperimenti, i miei codici e forse… qualche
            incantesimo Java. Perché si sa: <br /> <br />
            Il front-end seduce, ma il back-end… trama nell’ombra. 😈
          </p>
        </Container>
      </div>
    </>
  )
}
export default Home
