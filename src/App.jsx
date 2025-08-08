import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Contatti from "./components/Contatti"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </>
  )
}

export default App
