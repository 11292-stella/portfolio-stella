import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { fullstackProjects, frontendProjects, backendProjects, flutterProjects } from "../../data/projectsData"
import "../../styles/home.css"

const ProjectCard = ({ progetto }) => (
  <Col lg={4} md={6} className="d-flex">
    <Card className="project-card h-100 p-3 rounded-4 shadow-lg border border-secondary bg-opacity-10 text-light">
      <div className="card-img-container mb-3">
        {progetto.video ? (
          <div className="ratio ratio-16x9">
            {progetto.video.includes("youtube") ? (
              <iframe
                src={progetto.video}
                title={`Demo ${progetto.titolo}`}
                allowFullScreen
                style={{ borderRadius: "12px" }}
              />
            ) : (
              <video controls style={{ borderRadius: "12px", width: "100%" }}>
                <source src={progetto.video} type="video/mp4" />
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
        <Card.Title className="fs-4 text-center">{progetto.titolo}</Card.Title>
        <Card.Text className="text-center">{progetto.descrizione}</Card.Text>
        <div className="mt-auto text-center">
          <span className="badge bg-info text-dark">{progetto.tecnologie}</span>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-3">
          {progetto.repo && (
            <Button href={progetto.repo} target="_blank" variant="outline-info" className="btn-project">
              Repository
            </Button>
          )}
          {progetto.link && (
            <Button href={progetto.link} target="_blank" variant="outline-light" className="btn-project">
              Progetto
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  </Col>
)

const ProjectSection = ({ title, projects }) => (
  <section className="mt-5">
    <h2 className="text-center">{title}</h2>
    <Row className="justify-content-center mt-4 g-4">
      {projects.map((progetto) => (
        <ProjectCard key={progetto.id} progetto={progetto} />
      ))}
    </Row>
  </section>
)

const Projects = function () {
  return (
    <div className="d-flex flex-column min-vh-100 home-color">
      <Container className="flex-grow-1 py-5">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section id="projects-hero" className="mt-5">
          <h1 className="text-center">💻 Progetti</h1>
          <p className="text1 text-center mt-2">
            Full stack, frontend, backend e mobile. Da React + Spring Boot a Flutter con Firebase.
          </p>
        </section>

        <ProjectSection title="🔥 Full Stack" projects={fullstackProjects} />
        <ProjectSection title="🎨 Flutter" projects={flutterProjects} />
        <ProjectSection title="🎨 Frontend" projects={frontendProjects} />

        {/* Backend ha un'intro speciale */}
        <section className="mt-5">
          <h2 className="text-center">😈 Il mio lato oscuro: Java & Back-End</h2>
          <p className="text-light mt-4 text-center text1">
            Dopo aver giocato con colori, animazioni e layout scintillanti, ho deciso di esplorare
            il back-end. E cosa c'è di più misterioso e affascinante del Java?
          </p>
          <Row className="justify-content-center mt-4 g-4">
            {backendProjects.map((progetto) => (
              <ProjectCard key={progetto.id} progetto={progetto} />
            ))}
          </Row>
        </section>

      </Container>
    </div>
  )
}

export default Projects
