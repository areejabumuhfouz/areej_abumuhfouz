import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.jsx"
import Services from "./Home/Services.jsx";
import Projects from "./Home/Projects.jsx";
import Contact from "./Home/Contact.jsx";

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

     
    </>
  )
}

export default App
