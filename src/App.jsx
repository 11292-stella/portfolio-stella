import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/pages/Home"
import QA from "./components/pages/QA"
import QAReports from "./components/pages/QAReports"
import Projects from "./components/pages/Projects"
import Contatti from "./components/pages/Contatti"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home"     element={<Home />} />
        <Route path="/qa"       element={<QA />} />
        <Route path="/reports"  element={<QAReports />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </>
  )
}

export default App
