import { Container, Row, Col, Image, Card, Button } from "react-bootstrap"
import "../styles/home.css"

const Home = function () {

  // ── QA DATA ──────────────────────────────────────────────────────────────
 const qaStats = [
  { value: "47+", label: "Bug Documentati" },
  { value: "34+", label: "Fix Confermati" },
  { value: "72%", label: "Impatto Diretto" },
  { value: "8+",  label: "Bug Critici Analizzati" },

  // ENTERPRISE AUDIT
  { value: "19", label: "Articoli Auditati" },
  { value: "4", label: "Sezioni Bocciate" },
  { value: "12+", label: "Percorsi Errati" },
  { value: "AI", label: "Knowledge Risk" },
]

  const caseStudies = [
    {
      title: "Crash Android Kiosk",
      tipo: "Bug Investigation",
      problema: "L'app rimaneva bloccata sulla splash screen su dispositivi reali.",
      causa: "Libreria nativa libmpv.so assente nell'APK di produzione.",
      tool: "Android Studio, ADB, logcat",
      output: "Bug report strutturato consegnato al team con stack trace e steps to reproduce.",
      badge: "danger",
    },
    {
      title: "Loop Infinito Signage",
      tipo: "Regression Testing",
      problema: "Il refresh automatico causava freeze progressivi sull'intera piattaforma.",
      causa: "Comportamento sistemico cross-app non rilevato nei test precedenti.",
      tool: "Test case manuali, sessioni multi-istanza, report Notion",
      output: "Documentazione regressione con frequenza di riproduzione e impatto misurato.",
      badge: "warning",
    },
    {
      title: "Bug Localizzazione i18n",
      tipo: "Localization Testing",
      problema: "La lingua selezionata al login veniva persa dopo il redirect alla dashboard.",
      causa: "Stato client non persistito correttamente nel flusso di autenticazione.",
      tool: "Browser DevTools, network inspector, test multilingua",
      output: "Bug documentato con ipotesi tecnica, flow chart del problema e steps riproduzione.",
      badge: "info",
    },
  ]



   // ── NEW ENTERPRISE AUDIT DATA ────────────────────────────────────────────
const auditProjects = [
  {
    title: "Admin Ristoratore Audit",
    tipo: "Documentation QA",
    problema:
      "Knowledge Base piena di contenuti tecnici fuori target per utenti business.",
    causa:
      "Mix tra documentazione developer, installer e admin ristorante.",
    tool:
      "UI verification, percorso funzionale, audit AI, testing operativo",
    output:
      "Audit completo su 19 articoli con discrepanze UI, percorsi inesistenti e ottimizzazione AI.",
    badge: "primary",
  },

  {
    title: "AI Knowledge Risk Analysis",
    tipo: "AI Documentation Review",
    problema:
      "L'assistente AI poteva indicizzare percorsi errati e documentazione tecnica.",
    causa:
      "Cross-link verso sezioni developer e contenuti troppo vaghi.",
    tool:
      "Semantic review, UX writing, navigazione reale piattaforma",
    output:
      "Identificati rischi di loop IA, contenuti fuori target e articoli non pubblicabili.",
    badge: "danger",
  },

  {
    title: "Console UX Documentation",
    tipo: "UX & Technical Writing",
    problema:
      "Documentazione scritta come manuale tecnico invece che guida operativa.",
    causa:
      "Uso eccessivo di termini infrastrutturali e stack tecnologico.",
    tool:
      "Content audit, terminology review, workflow analysis",
    output:
      "Traduzione dei concetti tecnici in linguaggio business-oriented per ristoratori.",
    badge: "info",
  },
]

  const testingActivities = [
    { icon: "🔁", label: "Regression Testing", desc: "Verifica sistematica dopo ogni rilascio" },
    { icon: "📱", label: "APK Troubleshooting", desc: "Analisi build Android su dispositivi reali" },
    { icon: "🌍", label: "Localization Testing", desc: "Verifica comportamento multilingua" },
    { icon: "🔗", label: "End-to-End Testing", desc: "Validazione flussi completi cross-app" },
    { icon: "🛡️", label: "Security Findings", desc: "Identificazione vulnerabilità XSS" },
    { icon: "📋", label: "Release Verification", desc: "Controllo qualità pre e post deploy" },
  ]

  // ── PROJECTS DATA ─────────────────────────────────────────────────────────
  const progetti = [
    { id: 1,  categoria: "fullstack", titolo: "Sneaky Workout",              descrizione: "App per allenarsi di nascosto durante il lavoro. Frontend React, backend Spring Boot.",                                        immagine: "/img/sneakyworkout.png",            video: "/video/sneaky.mp4",                          tecnologie: "React, Spring Boot, PostgreSQL",       repo: "https://github.com/11292-stella/AppWeb-Sneacky-Workout",           link: "https://front-project-personal-trainer.vercel.app/home" },
    { id: 2,  categoria: "fullstack", titolo: "Impizza",                     descrizione: "Gestione ordini per pizzeria: interfaccia cliente e dashboard admin. Angular + Spring Boot.",                                   immagine: "/img/impizza.png",                  video: "/video/impizza.mp4",                         tecnologie: "Angular, Spring Boot, PostgreSQL, JWT", repo: "https://github.com/11292-stella/impizza-frontend" },
    { id: 3,  categoria: "frontend",  titolo: "Sleepy Halloween",            descrizione: "Mini-gioco a tema Halloween con React, TypeScript e Vite. Un'esperienza spettrale e divertente.",                               immagine: "/sleepy_halloween.png",                                                                          tecnologie: "React, TypeScript, Vite",              link: "https://sleepy-halloween.vercel.app/" },
    { id: 4,  categoria: "frontend",  titolo: "DevGuide",                    descrizione: "Guida pratica per ripassare concetti chiave dello sviluppo web. Leggera, utile e ironica.",                                     immagine: "/pp.png",                                                                                        tecnologie: "React, Bootstrap",                     link: "https://dev-guide-liart.vercel.app/home" },
    { id: 5,  categoria: "frontend",  titolo: "Music Play",                  descrizione: "Web app frontend con focus sulla gestione dello stato tramite Redux.",                                                           immagine: "/2p.png",                                                                                        tecnologie: "React, Redux, Bootstrap",              link: "https://lastproject-main.vercel.app/#home" },
    { id: 6,  categoria: "frontend",  titolo: "Citywide Weather",            descrizione: "Web app meteo in tempo reale con chiamate API e gestione dello stato.",                                                          immagine: "/3p.png",                                                                                        tecnologie: "React, Bootstrap, APIs",               link: "https://nuovpro.vercel.app/" },
    { id: 7,  categoria: "frontend",  titolo: "Libreria Horror",             descrizione: "Vetrina digitale dedicata ai libri dell'orrore. HTML, CSS e un pizzico di JavaScript.",                                         immagine: "/4p.png",                                                                                        tecnologie: "HTML5, CSS3, JavaScript",              link: "https://h-r7wd-stellas-projects-76eb7045.vercel.app/" },
    { id: 8,  categoria: "frontend",  titolo: "Netflix Clone",               descrizione: "Web app ispirata a Netflix con React e chiamate API per esplorare design e interfaccia.",                                        immagine: "/5p.png",                                                                                        tecnologie: "React, Bootstrap, APIs",               link: "https://w8project-2k6o.vercel.app/" },
    { id: 9,  categoria: "frontend",  titolo: "Cartoon Bistro",              descrizione: "Sito vetrina per un ristorante immaginario ispirato ai cartoni animati.",                                                        immagine: "/p6.png",                                                                                        tecnologie: "HTML5, CSS3, Bootstrap",               link: "https://week6-day2.vercel.app/#" },
    { id: 10, categoria: "frontend",  titolo: "Animazioni in Azione",        descrizione: "Primo esperimento con animazioni CSS: transizioni, trasformazioni e piccoli effetti dinamici.",                                  immagine: "/7p.png",                                                                                        tecnologie: "HTML5, CSS3",                          link: "https://w5d4-xqcw-stellas-projects-76eb7045.vercel.app/" },
    { id: 11, categoria: "frontend",  titolo: "Play to Memory",              descrizione: "Primo progetto JavaScript: interazioni, logica e piccoli script per rendere la pagina dinamica.",                               immagine: "/8p.png",                                                                                        tecnologie: "HTML5, CSS3, JavaScript",              link: "https://mio-progetto-theta.vercel.app/" },
    { id: 12, categoria: "backend",   titolo: "Invio dati Gmail",            descrizione: "Backend per invio email con Spring Boot e validazione DTO.",                                                                     immagine: "/img/inviodatigmail.png",           video: "/video/inviodatigmail.mp4",                  tecnologie: "Spring Boot, JavaMailSender",          repo: "https://github.com/11292-stella/Invio_dati_gmail" },
    { id: 13, categoria: "backend",   titolo: "Gestione Viaggi",             descrizione: "Backend completo per la creazione e gestione di itinerari turistici.",                                                           immagine: "/img/gestioneviaggi.png",           video: "/video/gestioneviaggi.mp4",                  tecnologie: "Spring Boot, JavaMailSender",          repo: "https://github.com/11292-stella/Gestione_Viaggi" },
    { id: 14, categoria: "backend",   titolo: "Gestione eventi",             descrizione: "Sistema backend per creare eventi e gestire prenotazioni utente.",                                                               immagine: "/img/gestioneeventi.png",           video: "/video/gestioneeventi.mp4",                  tecnologie: "Spring Boot, JavaMailSender",          repo: "https://github.com/11292-stella/gestione-eventi" },
    { id: 15, categoria: "backend",   titolo: "Based Security Project",      descrizione: "Base backend per login sicuro, gestione ruoli e token JWT.",                                                                     immagine: "/img/Based_security_project.png",   video: "/video/Based_security_project.mp4",          tecnologie: "Spring Boot, JWT",                     repo: "https://github.com/11292-stella/Based_security_project" },
    { id: 16, categoria: "backend",   titolo: "Sneaky Workout (Backend)",    descrizione: "Backend full stack per creare schede allenamento e gestire utenti.",                                                             immagine: "/img/Sneaky Workout.png",           video: "/video/Sneaky Workout.mp4",                  tecnologie: "Spring Boot, JavaMailSender",          repo: "https://github.com/11292-stella/Prova_Progetto_Personal_Trainer" },
    { id: 17, categoria: "backend",   titolo: "Impizza (Backend)",           descrizione: "Backend per gestione ordini pizzeria con autenticazione JWT e API REST.",                                                        immagine: "/img/impizza-backend.png",          video: "/video/impizza-backend.mp4",                 tecnologie: "Spring Boot, PostgreSQL, JWT",         repo: "https://github.com/11292-stella/impizza-backend" },
    { id: 18, categoria: "flutter",   titolo: "Grocery List App",            descrizione: "App Flutter per creare e gestire liste della spesa, chat e mappe.",                                                             immagine: "/img/app_grocery.png",              video: "/video/app grocery.mp4",                     tecnologie: "Flutter, Firebase, Riverpod",          repo: "https://github.com/11292-stella/Grocery_app" },
    { id: 19, categoria: "flutter",   titolo: "Flutter Quiz App",            descrizione: "App Flutter con quiz a scelta multipla e feedback visivo finale.",                                                              immagine: "/img/Flutter Quiz app.png",         video: "/video/seconda_app_Flutter_Quiz.mp4",        tecnologie: "Flutter Dart",                         repo: "https://github.com/11292-stella/Quiz_Flutter" },
    { id: 20, categoria: "flutter",   titolo: "Calendario dell'Avvento",     descrizione: "App Flutter con finestrelle interattive che narrano tradizioni natalizie da tutto il mondo.",                                   immagine: "/img/calendario dell'avvento.png",  video: "/video/calendario dell'avvento.mp4",         tecnologie: "Flutter Dart",                         repo: "https://github.com/11292-stella/christmas_calendar" },
    { id: 21, categoria: "flutter",   titolo: "Cooking App",                 descrizione: "App Flutter con categorie di cucina, ricette dettagliate e lista ingredienti.",                                                 immagine: "/img/Cooking app.png",              video: "/video/Cooking app.mp4",                     tecnologie: "Flutter Dart",                         repo: "https://github.com/11292-stella/cooking_app" },
    { id: 22, categoria: "flutter",   titolo: "SmartBudget App",             descrizione: "App Flutter per gestire entrate e uscite, con grafici e analisi delle spese.",                                                  immagine: "/img/SmartBudget.png",              video: "/video/SmartBudget.mp4",                     tecnologie: "Flutter Dart",                         repo: "https://github.com/11292-stella/SmartBudget" },
  ]

  const fullstackProjects = progetti.filter((p) => p.categoria === "fullstack")
  const flutterProjects   = progetti.filter((p) => p.categoria === "flutter")
  const frontendProjects  = progetti.filter((p) => p.categoria === "frontend")
  const backendProjects   = progetti.filter((p) => p.categoria === "backend")

  // ── RENDER HELPERS ────────────────────────────────────────────────────────
  const renderProjects = (projects) => (
    <Row className="justify-content-center mt-4 g-4">
      {projects.map((progetto) => (
        <Col lg={4} md={6} key={progetto.id} className="d-flex">
          <Card className="project-card h-100 p-3 rounded-4 shadow-lg border border-secondary bg-opacity-10 text-light">
            <div className="card-img-container mb-3">
              {progetto.video ? (
                <div className="ratio ratio-16x9">
                  {progetto.video.includes("youtube") ? (
                    <iframe src={progetto.video} title={`Demo ${progetto.titolo}`} allowFullScreen style={{ borderRadius: "12px" }} />
                  ) : (
                    <video controls style={{ borderRadius: "12px", width: "100%" }}>
                      <source src={progetto.video} type="video/mp4" />
                    </video>
                  )}
                </div>
              ) : (
                <Card.Img variant="top" src={progetto.immagine} alt={progetto.titolo} className="card-img-top rounded-3" style={{ maxHeight: "200px", objectFit: "cover" }} />
              )}
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fs-4 text-center">{progetto.titolo}</Card.Title>
              <Card.Text className="text-center">{progetto.descrizione}</Card.Text>
              <div className="mt-auto text-center">
                <span className="badge bg-info text-dark">{progetto.tecnologie}</span>
              </div>
              <div className="d-flex justify-content-center gap-2 mt-3">
                {progetto.repo && (
                  <Button href={progetto.repo} target="_blank" variant="outline-info" className="btn-project">Repository</Button>
                )}
                {progetto.link && (
                  <Button href={progetto.link} target="_blank" variant="outline-light" className="btn-project">Progetto</Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )

  const techLogos = [
    "/logo/l11-Photoroom.png", "/logo/l10-Photoroom.png", "/logo/l9-Photoroom.png",
    "/logo/l8-Photoroom.png",  "/logo/l7-Photoroom.png",  "/logo/l6-Photoroom.png",
    "/logo/l5-Photoroom.png",  "/logo/l4-Photoroom.png",  "/logo/l3-Photoroom.png",
    "/logo/l2-Photoroom.png",  "/logo/l1-Photoroom.png",  "/logo/11-Photoroom.png",
    "/logo/Flutter_logo.svg.png",
  ]
  const duplicatedTechLogos = [...techLogos, ...techLogos]

  // ── JSX ───────────────────────────────────────────────────────────────────
  return (
    <div className="d-flex flex-column min-vh-100 home-color">
      <Container className="flex-grow-1 py-5">

        {/* ABOUT */}
        <section id="about">
          <div className="p-4 rounded-4 shadow-lg border mt-5 border-secondary bg-opacity-10">
            <h1 className="text-center mb-4">Ctrl + Me = Portfolio</h1>
            <Row className="align-items-center">
              <Col md={4} className="text-center mb-4 mb-md-0">
                <div className="image-wrapper">
                  <Image src="/io.png" alt="Foto profilo" fluid className="home-img shadow" style={{ maxWidth: "300px" }} />
                </div>
              </Col>
              <Col md={8} className="d-flex flex-column justify-content-center">
                <p className="text-light fs-5">
  Ex grafica convertita al culto del codice e poi al culto dei bug report.

  Full stack developer con esperienza pratica in QA, debugging enterprise
  e audit documentale orientato ad AI e UX.

  Ho lavorato su sistemi reali analizzando crash Android, loop infiniti,
  problemi di localizzazione, regressioni cross-app e discrepanze tra
  documentazione e interfaccia reale.

  Oltre allo sviluppo frontend e backend, mi occupo di:
  verifica funzionale,
  investigazione bug,
  testing operativo,
  auditing di Knowledge Base enterprise
  e analisi del rischio AI nella documentazione tecnica.

  Di giorno scrivo componenti React, API Spring Boot e applicazioni Flutter.
  Di notte sospetto che ogni software nasconda almeno tre bug critici.

  Se cerchi una developer che sa costruire, analizzare e mettere in discussione
  un software con metodo, ci siamo.
</p>
              </Col>
            </Row>
          </div>
        </section>

        {/* TECH */}
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

        {/* SKILLS */}
        <section id="skills">
    <p className="text1 text-center mb-5">
      Sviluppo software, QA operativo, debugging enterprise
      e analisi documentale orientata all'esperienza utente.
    </p>

    <Row className="justify-content-center text-center text-light">

      <Col md={3}>
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

      <Col md={3}>
        <h5 className="text-info">Backend</h5>

        <ul className="list-unstyled">
          <li>Spring Boot + REST API</li>
          <li>Autenticazione JWT</li>
          <li>Gestione Database PostgreSQL</li>
          <li>DTO e validazioni custom</li>
          <li>Gestione sicurezza base</li>
        </ul>
      </Col>

      <Col md={3}>
        <h5 className="text-info">QA & Debug</h5>

        <ul className="list-unstyled">
          <li>Regression Testing</li>
          <li>APK Troubleshooting</li>
          <li>Localization Testing</li>
          <li>Cross-platform testing</li>
          <li>Bug investigation</li>
          <li>Release verification</li>
        </ul>
      </Col>

      <Col md={3}>
        <h5 className="text-info">Enterprise Audit</h5>

        <ul className="list-unstyled">
          <li>Knowledge Base Audit</li>
          <li>UX Documentation Review</li>
          <li>AI Knowledge Risk Analysis</li>
          <li>Terminology Simplification</li>
          <li>UI / Documentation Validation</li>
          <li>Workflow Analysis</li>
        </ul>
      </Col>

    </Row>
</section>


        {/* QA IMPACT DASHBOARD */}
        <section id="qa">
          <div id="enterprise-audit"></div>
          <h2 className="text-center mt-5">🔍 QA Experience</h2>
          <p className="text1 text-center mt-2">
            Analisi su sistemi reali: bug documentati, regressioni verificate, fix confermati.
          </p>

          {/* Statistiche */}
          <Row className="justify-content-center mt-4 g-4">
            {qaStats.map((stat, index) => (
              <Col key={index} xs={6} md={3}>
                <div
                  className="p-4 rounded-4 shadow-lg border border-secondary text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <div style={{
                    fontFamily: "'Emilys Candy', serif",
                    fontSize: "2.8rem",
                    fontWeight: "bolder",
                    color: "rgb(151, 208, 244)",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                  }}>
                    {stat.value}
                  </div>
                  <p className="text-light mt-2 mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Attività di testing */}
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
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", fontFamily: "'Mystery Quest', system-ui" }}
                  >
                    <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                    <div>
                      <p className="text-info mb-1 fw-bold text2" style={{letterSpacing: "0.1em"}} >{item.label}</p>
                      <p className="text-text-white mb-0 text2 " style={{letterSpacing: "0.1em"}} >{item.desc}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* CASE STUDIES */}
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
                    {/* Badge tipo */}
                    <span className={`badge bg-${study.badge} mb-3 align-self-start`} style={{ fontFamily: "'Mystery Quest', system-ui", letterSpacing: "0.1em" }}>
                      {study.tipo}
                    </span>

                    <Card.Title style={{
                      fontFamily: "'Emilys Candy',  serif",
                      fontSize: "1.4rem",
                      color: "rgb(151, 208, 244)",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                    }}>
                      {study.title}
                    </Card.Title>

                    <div className="mt-3 d-flex flex-column gap-3" style={{ fontFamily: "'Mystery Quest', system-ui", fontSize: "0.9rem" }}>
                      <div>
                        <span className="text-danger text2 fw-bold"style={{letterSpacing: "0.1em"}}>🐛 Problema: </span>
                        <span className="text-center text2" style={{letterSpacing: "0.1em"}}>{study.problema}</span>
                      </div>
                      <div>
                        <span className="text-danger text2 fw-bold" style={{letterSpacing: "0.1em"}}>🔎 Causa: </span>
                        <span className="text-center text2" style={{letterSpacing: "0.1em"}}>{study.causa}</span>
                      </div>
                      <div>
                        <span className="text-warning  text2 fw-bold" style={{letterSpacing: "0.1em"}}>🛠️ Tool usati: </span>
                        <span className="text-info text2" style={{letterSpacing: "0.1em"}}>{study.tool}</span>
                      </div>
                      <div className="mt-auto pt-2 border-top border-secondary">
                        <span className="text-success  text2 fw-bold" style={{letterSpacing: "0.1em"}}>📄 Output: </span>
                        <span className="text-center text2  " style={{letterSpacing: "0.1em"}}>{study.output}</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* ENTERPRISE DOCUMENTATION AUDIT */}
<section id="enterprise-audit">
  <h2 className="text-center mt-5">
    📚 Knowledge Base & AI Audit
  </h2>

  <p className="text1 text-center mt-2">
    Audit reali su Knowledge Base enterprise:
    verifica UI, documentazione tecnica,
    rischio AI e coerenza dei percorsi.
  </p>

  <Row className="justify-content-center mt-4 g-4">
    {auditProjects.map((study, index) => (
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

            {/* Badge tipo */}
            <span
              className={`badge bg-${study.badge} mb-3 align-self-start`}
              style={{
                fontFamily: "'Mystery Quest', system-ui",
                letterSpacing: "0.1em",
              }}
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
              style={{
                fontFamily: "'Mystery Quest', system-ui",
                fontSize: "0.9rem",
              }}
            >

              <div>
                <span
                  className="text-danger text2 fw-bold"
                  style={{ letterSpacing: "0.1em" }}
                >
                  🐛 Problema:
                </span>

                <span
                  className="text-center text2"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {" "}
                  {study.problema}
                </span>
              </div>

              <div>
                <span
                  className="text-danger text2 fw-bold"
                  style={{ letterSpacing: "0.1em" }}
                >
                  🔎 Causa:
                </span>

                <span
                  className="text-center text2"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {" "}
                  {study.causa}
                </span>
              </div>

              <div>
                <span
                  className="text-warning text2 fw-bold"
                  style={{ letterSpacing: "0.1em" }}
                >
                  🛠️ Tool usati:
                </span>

                <span
                  className="text-info text2"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {" "}
                  {study.tool}
                </span>
              </div>

              <div className="mt-auto pt-2 border-top border-secondary">
                <span
                  className="text-success text2 fw-bold"
                  style={{ letterSpacing: "0.1em" }}
                >
                  📄 Output:
                </span>

                <span
                  className="text-center text2"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {" "}
                  {study.output}
                </span>
              </div>

            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-center mt-5">🔥 Progetti Full Stack</h2>
          {renderProjects(fullstackProjects)}

          <h2 className="text-center mt-5">🎨 Progetti Flutter</h2>
          {renderProjects(flutterProjects)}

          <h2 className="text-center mt-5">🎨 Progetti Frontend</h2>
          {renderProjects(frontendProjects)}

          <h2 className="text-center mt-5">😈 Il mio lato oscuro: Java & Back-End</h2>
          <p className="text-light mt-4 text-center text1">
            Dopo aver giocato con colori, animazioni e layout scintillanti, ho deciso di esplorare
            il back-end. E cosa c'è di più misterioso e affascinante del Java?
          </p>
          {renderProjects(backendProjects)}
        </section>

      </Container>
    </div>
  )
}

export default Home