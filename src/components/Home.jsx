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
              <p className=" text-light text1">
                Ciao! Mi chiamo Stella e questo è il mio spazio digitale, dove
                racconto il mio percorso da curiosa appassionata di tecnologia a
                sviluppatrice full stack. <br /> Amo trasformare idee in
                interfacce intuitive e funzionali, e ogni progetto è per me una
                piccola avventura. <br /> Benvenutə nel mio mondo fatto di
                codice, creatività e tanta voglia di crescere.
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
                        piattaforma motivazionale e interattiva pensata per chi
                        vuole superare i propri limiti. Un campo di allenamento
                        digitale dove disciplina, forza mentale e crescita
                        personale si incontrano.
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
                <p className=" text-light text1">
                  Questo progetto è il risultato di un mese intenso di lavoro:
                  il capstone finale del mio corso, realizzato con tutte le
                  tecnologie che ho studiato. Non è stato facile: ho affrontato
                  ostacoli tecnici, momenti di frustrazione e tante ore di
                  debugging. Ma con determinazione e impegno, sono riuscita a
                  completarlo. Sneaky Workout non è solo un sito: è il simbolo
                  della mia crescita, della mia resilienza e della passione che
                  metto in ciò che faccio. Ogni sezione, ogni funzione, ogni
                  dettaglio è stato pensato per offrire un’esperienza
                  coinvolgente e motivante, proprio come il percorso che mi ha
                  portata fin qui
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
                        piattaforma motivazionale e interattiva pensata per chi
                        vuole superare i propri limiti. Un campo di allenamento
                        digitale dove disciplina, forza mentale e crescita
                        personale si incontrano.
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
                <p className=" text-light text1">
                  DevGuide è nato dal desiderio di avere sempre a portata di
                  mano una guida semplice, diretta e personale per ripassare i
                  concetti fondamentali dello sviluppo web. È il frutto di
                  giorni di studio, di prove, di errori e di tanta voglia di
                  creare qualcosa che fosse davvero utile per me e per chi, come
                  me, si ritrova spesso a cercare quel comando, quella sintassi,
                  quel concetto che sembra sfuggire proprio quando serve. Non è
                  stato tutto immediato: ho affrontato momenti di confusione, ho
                  riscritto sezioni intere, ho imparato a gestire la
                  frustrazione e a trovare soluzioni. Ma ogni card, ogni
                  sezione, ogni dettaglio è lì per un motivo, pensato con cura e
                  con ironia, per rendere l’esperienza leggera ma efficace.
                  DevGuide non è solo una web app: è il mio modo di dire “ce la
                  posso fare”, è il simbolo della mia crescita come
                  sviluppatrice e della passione che metto in ogni riga di
                  codice.
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
                        Applicazione frontend sviluppata come ultimo compito del
                        corso. Un esercizio pratico dove ho messo in campo Redux
                        per gestire lo stato in modo efficiente, consolidando le
                        competenze acquisite.
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
                <p className=" text-light text1">
                  Questo progetto segna la conclusione del mio percorso di studi
                  frontend. Non è stato un capstone, ma l’ultimo esercizio
                  ufficiale: un’occasione per dimostrare padronanza delle
                  tecnologie apprese, in particolare Redux. L’obiettivo era
                  creare un’app funzionale, ben strutturata e con una gestione
                  dello stato solida. Anche se non ha richiesto settimane di
                  lavoro come altri progetti, è stato fondamentale per
                  consolidare ciò che ho imparato. Ogni componente, ogni flusso
                  di dati, ogni interazione è stata pensata per essere chiara,
                  efficiente e scalabile. Music play è il punto finale di un
                  percorso, ma anche l’inizio di una nuova fase: quella in cui
                  metto in pratica tutto ciò che ho imparato, con sicurezza e
                  voglia di crescere ancora.
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
                        è una semplice web app meteo che mostra le condizioni
                        atmosferiche in tempo reale. Un progetto leggero ma
                        significativo, nato mentre muovevo i primi passi con
                        React.
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
                <p className=" text-light text1">
                  Questo progetto è stato uno dei miei primi esperimenti con
                  React: una piccola applicazione meteo che mi ha aiutato a
                  comprendere il funzionamento dei componenti, degli hook e
                  delle chiamate API. Anche se semplice nella struttura, è stato
                  fondamentale per familiarizzare con il ciclo di vita di React
                  e con la logica asincrona. Ho imparato a gestire lo stato, a
                  strutturare il layout e a rendere l’interfaccia responsive.
                  Citywide Weather rappresenta quel momento in cui la teoria ha
                  iniziato a trasformarsi in pratica. È il primo tassello di un
                  percorso che oggi mi porta a costruire progetti sempre più
                  complessi e funzionali.
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
                        Vetrina digitale dedicata ai libri dell’orrore. Un
                        progetto realizzato quando ancora non conoscevo React—e
                        si vede! Ma è stato il primo passo verso una nuova
                        consapevolezza.
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
                <p className=" text-light text1">
                  Questo progetto è nato in un periodo in cui stavo ancora
                  cercando di orientarmi nel mondo dello sviluppo web. Non
                  conoscevo ancora React, e ogni piccola funzionalità sembrava
                  una montagna da scalare. La Libreria Horror è una semplice
                  pagina che presenta una selezione di libri inquietanti, con
                  un’atmosfera cupa e accattivante. Anche se tecnicamente
                  rudimentale, mi ha permesso di sperimentare con HTML, CSS e un
                  pizzico di JavaScript. Fortunatamente, poco dopo ho scoperto
                  React—e da lì in poi la vita da sviluppatrice è diventata
                  magicamente più semplice. Questo progetto resta un ricordo
                  prezioso: il punto di partenza di un percorso fatto di
                  scoperte, errori e tanta crescita.
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
                        Progetto scolastico dove abbiamo simulato la celebre
                        piattaforma di streaming, utilizzando le API fornite
                        dalla scuola. Un’esperienza divertente e formativa!
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
                <p className=" text-light text1">
                  Questo progetto è nato durante un workshop scolastico, dove ci
                  è stato chiesto di ricreare una versione semplificata di
                  Netflix. Abbiamo utilizzato le API messe a disposizione dalla
                  scuola per popolare l’interfaccia con film e serie TV. È stato
                  entusiasmante lavorare su un layout familiare e cercare di
                  replicare l’esperienza utente nel modo più fedele possibile.
                  Ho imparato a gestire le chiamate API, a strutturare le pagine
                  con React e a curare i dettagli visivi per rendere l’app
                  accattivante. Netflix Clone è stato un vero banco di prova: mi
                  ha permesso di mettere in pratica concetti fondamentali e di
                  lavorare in modo più consapevole sul design e sulla logica. Un
                  progetto che mi ha fatto sentire, per la prima volta, davvero
                  dentro al mondo dello sviluppo web.
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
                        Sito per un ristorante ispirato ai cartoni animati,
                        creato durante le mie prime esperienze con Bootstrap. Un
                        progetto divertente e colorato che mi ha fatto scoprire
                        il potenziale del design responsive.
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
                <p className=" text-light text1">
                  Questo progetto è nato quando stavo iniziando a esplorare
                  Bootstrap: il mio primo vero approccio a un framework CSS. Ho
                  deciso di creare un sito per un ristorante immaginario
                  ispirato ai cartoni animati, giocando con colori vivaci,
                  layout responsive e componenti predefiniti. È stato un
                  esercizio leggero ma molto utile per capire come strutturare
                  una pagina in modo ordinato e adattabile a tutti i
                  dispositivi. Cartoon Bistro mi ha fatto divertire e mi ha dato
                  fiducia: ho visto come, anche con strumenti semplici, si può
                  creare qualcosa di piacevole e funzionale. È stato uno dei
                  primi momenti in cui ho sentito che il web design poteva
                  essere anche creativo e giocoso.
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
                        è il mio primo esperimento con le animazioni CSS. Ho
                        giocato con movimenti, transizioni e trasformazioni per
                        dare vita a semplici elementi grafici.
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
                <p className=" text-light text1">
                  In questo progetto ho scoperto il mondo delle animazioni CSS e
                  mi sono divertita a sperimentare con rotazioni, transizioni e
                  piccoli effetti dinamici. Ogni “task” è stato un’occasione per
                  provare qualcosa di nuovo: far girare un elemento, farlo
                  apparire con un effetto fluido, oppure modificarne lo stile al
                  passaggio del mouse. Anche se il contenuto era semplice, il
                  vero obiettivo era capire il comportamento degli elementi
                  animati e come rendere una pagina più interattiva e
                  coinvolgente. Questo progetto mi ha fatto capire quanto anche
                  un piccolo movimento possa cambiare la percezione di un sito,
                  rendendolo più vivo e interessante.
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
                        il mio primo progetto dove ho iniziato a usare
                        JavaScript. Ho sperimentato con logica, interazioni e
                        piccoli script per rendere la pagina più dinamica.
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
                <p className=" text-light text1">
                  Questo progetto segna il mio primissimo approccio con
                  JavaScript. Dopo aver lavorato con HTML e CSS, sentivo il
                  bisogno di aggiungere un po’ di logica e interattività alle
                  mie pagine. Ho iniziato con semplici script: risposte a
                  eventi, modifiche al DOM, e piccole funzionalità che rendevano
                  il sito più “vivo”. Anche se il codice era basilare, è stato
                  un momento importante: ho capito come il JavaScript può
                  trasformare una pagina statica in qualcosa di dinamico e
                  reattivo. Questo progetto è stato il mio trampolino verso il
                  mondo della programmazione vera e propria, e mi ha dato la
                  spinta per continuare a esplorare.
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
