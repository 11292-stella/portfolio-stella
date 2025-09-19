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
import attestati from "../attestati.json"

import { useState, useEffect } from "react"

const Home = function () {
  /**carousel */
  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size))
      return acc
    }, [])

  const [cardsPerSlide, setCardsPerSlide] = useState(1)

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 750) {
        setCardsPerSlide(3)
      } else {
        setCardsPerSlide(1)
      }
    }

    updateCardsPerSlide()
    window.addEventListener("resize", updateCardsPerSlide)

    return () => window.removeEventListener("resize", updateCardsPerSlide)
  }, [])

  /**carousel */

  return (
    <>
      <div className="d-flex flex-column min-vh-100 home-color">
        <Container className="flex-grow-1 py-5">
          <h1 className="text-center mt-4"> Ctrl + Me = Portfolio</h1>

          <Row className="mt-5">
            <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
              <div className="image-wrapper">
                <Image
                  src="/io.png"
                  alt="Descrizione immagine"
                  fluid
                  className="home-img"
                />
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
            >
              <p className="text-light text1">
                Ex grafica convertita al culto del codice. Junior full stack
                developer con una passione per layout responsive, componenti
                riutilizzabili e meme tecnici. <br />
                Ho lasciato il mondo della stampa per abbracciare React, Java e
                le gioie del debugging. <br />
                Sto studiando Angular (con pazienza zen) e presto tradirò
                Bootstrap con Tailwind. <br />
                Se cerchi una developer che sa scrivere codice e anche riderci
                sopra, ci siamo.
              </p>
            </Col>
            <Row className="justify-content-center mt-5">
              <Col md={8}>
                <h2 className="text-center">
                  Il punto d’arrivo… e di ripartenza
                </h2>
                <Image
                  src="/fine.png"
                  alt="Descrizione immagine"
                  fluid
                  className="mt-4 at1"
                />
                <h2 className="text-center mt-5">
                  Le tappe della mia formazione con Epicode
                </h2>
              </Col>
            </Row>

            {/**CAROUSEL */}
            <Carousel fade interval={5000} touch>
              {chunkArray(attestati, cardsPerSlide).map((group, idx) => (
                <Carousel.Item key={idx}>
                  <Row className="justify-content-center px-3 py-4">
                    {group.map((item) => (
                      <Col
                        md={4}
                        sm={12}
                        xs={12}
                        className="mb-4 d-flex"
                        key={item.id}
                      >
                        <Card className=" cards  h-100">
                          <Card.Img
                            variant="top"
                            src={item.immagine}
                            className="img-fluid cardimg "
                          />
                          <Card.Body>
                            <Card.Title className="text-center titolo">
                              {item.titolo}
                            </Card.Title>
                            <Card.Text className="text-center">
                              {item.descrizione}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>

            {/**CAROUSEL */}

            <h2 className="text-center mt-5">
              {" "}
              Qui è dove le idee prendono forma
            </h2>
            <p className=" text-light mb-4 text-center text1">
              Questi sono alcuni dei progetti che ho sviluppato per mettere in
              pratica ciò che ho imparato e sperimentare nuove soluzioni.
            </p>

            {/**inizio primo progetto */}
            <Row className="justify-content-center mt-5">
              <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
                <div className="image-wrapper">
                  <Card className="cards2">
                    <Card.Img variant="top" src="/1p.png" className="cardimg" />
                    <Card.Body>
                      <Card.Title className="titolo">Sneaky Workout</Card.Title>
                      <Card.Text>
                        Web app full stack per allenamenti personalizzati e
                        motivazionali. Un campo digitale dove disciplina e
                        ironia si incontrano.
                      </Card.Text>
                      <Button
                        href="https://front-project-personal-trainer.vercel.app/home"
                        target="_blank"
                        variant="info"
                        className="bot"
                      >
                        vai al progetto
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-light text1">
                  Sneaky Workout è il mio progetto capstone: una web app full
                  stack pensata per chi vuole allenarsi in modo discreto ma
                  efficace. Realizzata con React, Redux, Spring Boot e
                  PostgreSQL, integra timer, selezione esercizi e notifiche.{" "}
                  <br />
                  È stato un mese intenso tra bug, refactoring e momenti di
                  “perché non funziona?”, ma anche una palestra di crescita
                  tecnica e personale. <br />
                  Ogni funzione è pensata per motivare l’utente, proprio come il
                  percorso che mi ha portata fin qui. Se il codice fosse uno
                  sport, questo progetto sarebbe il mio primo triathlon.
                </p>
                <p className="text-light text1">
                  <strong>Tecnologie:</strong> React, Redux Toolkit, Spring
                  Boot, PostgreSQL, RESTful API, CSS3, Vite
                </p>
              </Col>
            </Row>
            {/**fine primo progetto */}
            {/**inizio primo progetto */}
            <Row className="justify-content-center mt-5">
              <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
                <div className="image-wrapper">
                  <Card className="cards2">
                    <Card.Img variant="top" src="/pp.png" className="cardimg" />
                    <Card.Body>
                      <Card.Title className="titolo">DevGuide</Card.Title>
                      <Card.Text>
                        Web app pensata come guida pratica e personale per
                        ripassare concetti chiave dello sviluppo web. Leggera,
                        utile e con un pizzico di ironia.
                      </Card.Text>

                      <Button
                        href="https://dev-guide-liart.vercel.app/home"
                        target="_blank"
                        variant="info"
                        className="bot"
                      >
                        vai al progetto
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-light text1">
                  DevGuide è una web app pensata per chi — come me — si ritrova
                  spesso a cercare “quel comando che sapevo ieri”. Una raccolta
                  di concetti fondamentali dello sviluppo web, organizzata in
                  modo semplice e diretto. <br />
                  È nata da giorni di studio, prove, errori e frustrazione
                  trasformata in soluzioni. Ogni card è lì per un motivo:
                  aiutare, ricordare, semplificare. <br />
                  Realizzata con React e Redux, DevGuide è il mio modo di dire
                  “ce la posso fare” — con ironia, determinazione e un layout
                  responsive.
                </p>
                <p className="text-light text1">
                  <strong>Tecnologie:</strong> React, Redux Toolkit, Vite, CSS3,
                  Responsive Design
                </p>
              </Col>
            </Row>
            {/**fine primo progetto */}
            {/**secondo progetto */}
            <Row className="justify-content-center mt-5">
              <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
                <div className="image-wrapper">
                  <Card className="cards2">
                    <Card.Img variant="top" src="/2p.png" className="cardimg" />
                    <Card.Body>
                      <Card.Title className="titolo">Music play</Card.Title>
                      <Card.Text>
                        Web app frontend sviluppata per consolidare le
                        competenze acquisite, con focus sulla gestione dello
                        stato tramite Redux.
                      </Card.Text>
                      <Button
                        href="https://lastproject-main.vercel.app/#home"
                        target="_blank"
                        variant="info"
                        className="bot"
                      >
                        vai al progetto
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-light text1">
                  Music Play è l’ultimo progetto frontend del mio percorso
                  Epicode: un’app pensata per mettere in pratica le competenze
                  acquisite, in particolare la gestione dello stato con Redux.{" "}
                  <br />
                  L’obiettivo era creare un’interfaccia funzionale, ben
                  strutturata e scalabile. Ogni componente e flusso dati è stato
                  progettato per essere chiaro ed efficiente. <br />
                  Anche se non è stato il progetto più lungo, è stato
                  fondamentale per consolidare ciò che ho imparato e segnare il
                  passaggio dalla teoria alla pratica. Music Play è il mio
                  “ultimo compito”, ma anche il primo passo verso lo sviluppo
                  consapevole.
                </p>
                <p className="text-light text1">
                  <strong>Tecnologie:</strong> React, Redux Toolkit, Vite, CSS3
                </p>
              </Col>
            </Row>
            {/**fine secondo progetto */}
            {/**terzo progetto */}
            <Row className="justify-content-center mt-5">
              <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
                <div className="image-wrapper">
                  <Card className="cards2">
                    <Card.Img variant="top" src="/3p.png" className="cardimg" />
                    <Card.Body>
                      <Card.Title className="titolo">
                        Citywide weather
                      </Card.Title>
                      <Card.Text>
                        Web app meteo in tempo reale, sviluppata per esplorare
                        React, chiamate API e gestione dello stato. Un primo
                        passo concreto nel mondo frontend.
                      </Card.Text>

                      <Button
                        href="https://nuovpro.vercel.app/"
                        target="_blank"
                        variant="info"
                        className="bot"
                      >
                        vai al progetto
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-light text1">
                  Citywide Weather è stata una delle mie prime esperienze con
                  React: una web app semplice ma fondamentale per comprendere
                  componenti, hook e chiamate API. <br />
                  Mi ha permesso di familiarizzare con il ciclo di vita dei
                  componenti, la logica asincrona e la gestione dello stato.{" "}
                  <br />
                  Ogni funzione è stata pensata per essere chiara e responsive,
                  e ha segnato il passaggio dalla teoria alla pratica. È il
                  primo tassello di un percorso che oggi mi porta a costruire
                  progetti sempre più strutturati e funzionali.
                </p>
                <p className="text-light text1">
                  <strong>Tecnologie:</strong> React, JavaScript, OpenWeather
                  API, CSS3
                </p>
              </Col>
            </Row>
            {/**fine terzo progetto */}
            {/**quarto progetto */}
            <Row className="justify-content-center mt-5">
              <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
                <div className="image-wrapper">
                  <Card className="cards2">
                    <Card.Img variant="top" src="/4p.png" className="cardimg" />
                    <Card.Body>
                      <Card.Title className="titolo">
                        Libreria Horror
                      </Card.Title>
                      <Card.Text>
                        Vetrina digitale dedicata ai libri dell’orrore,
                        realizzata nei primi passi del mio percorso. HTML, CSS e
                        un pizzico di JavaScript — prima di scoprire React e la
                        pace interiore.
                      </Card.Text>

                      <Button
                        href="https://h-r7wd-stellas-projects-76eb7045.vercel.app/"
                        target="_blank"
                        variant="info"
                        className="bot"
                      >
                        vai al progetto
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-light text1">
                  Libreria Horror è uno dei miei primi esperimenti nel mondo
                  dello sviluppo web: una pagina dedicata ai libri inquietanti,
                  con atmosfera cupa e layout semplice. <br />
                  Realizzata con HTML, CSS e un po’ di JavaScript, mi ha
                  permesso di muovere i primi passi tra strutture, stili e
                  interazioni. <br />
                  Non conoscevo ancora React — e si vede! — ma questo progetto
                  ha segnato l’inizio del mio percorso, fatto di scoperte,
                  errori e tanta crescita. Oggi lo guardo con affetto: è il mio
                  “prequel tecnico”.
                </p>
                <p className="text-light text1">
                  <strong>Tecnologie:</strong> HTML5, CSS3, JavaScript
                </p>
              </Col>
            </Row>
            {/**fine quarto progetto */}
            {/**quinto progetto */}
            <Row className="justify-content-center mt-5">
              <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
                <div className="image-wrapper">
                  <Card className="cards2">
                    <Card.Img variant="top" src="/5p.png" className="cardimg" />
                    <Card.Body>
                      <Card.Title className="titolo">Netflix Clone</Card.Title>
                      <Card.Text>
                        Web app ispirata a Netflix, sviluppata durante un
                        workshop scolastico. Un esercizio pratico per esplorare
                        React, chiamate API e design dell’interfaccia.
                      </Card.Text>

                      <Button
                        href="https://w8project-2k6o.vercel.app/"
                        target="_blank"
                        variant="info"
                        className="bot"
                      >
                        vai al progetto
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-light text1">
                  Netflix Clone è stato il mio primo vero banco di prova: una
                  web app sviluppata durante un workshop scolastico, con
                  l’obiettivo di replicare l’esperienza utente della celebre
                  piattaforma di streaming. <br />
                  Ho utilizzato le API fornite per popolare l’interfaccia con
                  film e serie TV, imparando a gestire chiamate asincrone,
                  strutturare le pagine con React e curare il design visivo.{" "}
                  <br />È stato un progetto divertente e formativo, che mi ha
                  fatto sentire — per la prima volta — davvero dentro al mondo
                  dello sviluppo web.
                </p>
                <p className="text-light text1">
                  <strong>Tecnologie:</strong> React, JavaScript, API
                  scolastiche, CSS3
                </p>
              </Col>
            </Row>
            {/**fine quinto progetto */}

            {/**sesto progetto */}
            <Row className="justify-content-center mt-5">
              <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
                <div className="image-wrapper">
                  <Card className="cards2">
                    <Card.Img variant="top" src="/p6.png" className="cardimg" />
                    <Card.Body>
                      <Card.Title className="titolo">Cartoon Bistro</Card.Title>
                      <Card.Text>
                        Sito vetrina per un ristorante immaginario ispirato ai
                        cartoni animati. Creato durante le prime esperienze con
                        Bootstrap, per esplorare layout responsive e design
                        creativo.
                      </Card.Text>

                      <Button
                        href="https://week6-day2.vercel.app/#"
                        target="_blank"
                        variant="info"
                        className="bot"
                      >
                        vai al progetto
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-light text1">
                  Cartoon Bistro è stato il mio primo esperimento con Bootstrap:
                  un sito vetrina per un ristorante immaginario ispirato ai
                  cartoni animati. <br />
                  Ho giocato con colori vivaci, layout responsive e componenti
                  predefiniti per creare un’interfaccia divertente e funzionale.{" "}
                  <br />È stato un esercizio leggero ma fondamentale per capire
                  come strutturare una pagina web in modo ordinato e adattabile.
                  Cartoon Bistro mi ha fatto scoprire che il web design può
                  essere anche creativo e giocoso — e che Bootstrap può essere
                  un ottimo alleato per iniziare.
                </p>
                <p className="text-light text1">
                  <strong>Tecnologie:</strong> HTML5, CSS3, Bootstrap
                </p>
              </Col>
            </Row>
            {/**fine sesto progetto */}
            {/**settimo */}
            <Row className="justify-content-center mt-5">
              <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
                <div className="image-wrapper">
                  <Card className="cards2">
                    <Card.Img variant="top" src="/7p.png" className="cardimg" />
                    <Card.Body>
                      <Card.Title className="titolo">
                        Animazioni in Azione
                      </Card.Title>
                      <Card.Text>
                        Primo esperimento con animazioni CSS: transizioni,
                        trasformazioni e piccoli effetti dinamici per rendere
                        gli elementi più vivi e interattivi.
                      </Card.Text>

                      <Button
                        href="https://w5d4-xqcw-stellas-projects-76eb7045.vercel.app/"
                        target="_blank"
                        variant="info"
                        className="bot"
                      >
                        vai al progetto
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-light text1">
                  Animazioni in Azione è stato il mio primo tuffo nel mondo
                  delle animazioni CSS: un progetto semplice ma fondamentale per
                  capire come dare movimento e personalità agli elementi
                  grafici. <br />
                  Ho sperimentato con rotazioni, transizioni e trasformazioni,
                  imparando a rendere le interfacce più coinvolgenti e reattive.{" "}
                  <br />
                  Ogni effetto è stato un piccolo test creativo, e ogni task
                  un’occasione per scoprire quanto anche un dettaglio animato
                  possa cambiare la percezione di una pagina. È il progetto dove
                  ho capito che il front-end può anche... ballare.
                </p>
                <p className="text-light text1">
                  <strong>Tecnologie:</strong> HTML5, CSS3, Animazioni CSS,
                  Transizioni, Transform
                </p>
              </Col>
            </Row>
            {/**fine settimo */}
            {/**ottavo prog */}
            <Row className="justify-content-center mt-5">
              <Col md={4} className="mt-0 mt-md-3 mt-lg-0 ">
                <div className="image-wrapper">
                  <Card className="cards2">
                    <Card.Img variant="top" src="/8p.png" className="cardimg" />
                    <Card.Body>
                      <Card.Title className="titolo">Play to Mamory</Card.Title>
                      <Card.Text>
                        Primo progetto JavaScript: interazioni, logica e piccoli
                        script per trasformare una pagina statica in qualcosa di
                        vivo e dinamico.
                      </Card.Text>

                      <Button
                        href="https://mio-progetto-theta.vercel.app/"
                        target="_blank"
                        variant="info"
                        className="bot"
                      >
                        vai al progetto
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-light text1">
                  Play to Mamory è il mio primo esperimento con JavaScript: un
                  progetto semplice ma fondamentale per passare da HTML e CSS
                  alla logica vera e propria. <br />
                  Ho iniziato a gestire eventi, modificare il DOM e creare
                  piccole funzionalità interattive. Anche se il codice era
                  basilare, è stato il trampolino verso il mondo della
                  programmazione. <br />
                  Questo progetto mi ha fatto scoprire quanto anche un semplice
                  script possa dare vita a una pagina — e quanto mi piacesse
                  scrivere codice che reagisce.
                </p>
                <p className="text-light text1">
                  <strong>Tecnologie:</strong> HTML5, CSS3, JavaScript
                </p>
              </Col>
            </Row>
            {/**fine ottavo */}
            <h2 className="text-center  mt-5">
              {" "}
              Il mio lato oscuro: Java & Back-End
            </h2>
            <p className=" text-light mt-4 text-center text1">
              Ebbene sì… ho un lato oscuro. <br /> Dopo aver giocato con colori,
              animazioni e layout scintillanti, ho deciso di esplorare il
              back-end. <br />E cosa c’è di più oscuro, misterioso e
              affascinante del Java? <br />
              Il back-end è come una creatura notturna: lavora dietro le quinte,
              lontano dai riflettori,
              <br /> in un mondo fatto di logica, server e database. <br /> Non
              si mostra facilmente… ma lascia tracce. <br /> <br />
              Se siete curiosi di scoprire cosa si cela nel buio, potete
              sbirciare nel mio{" "}
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
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home
