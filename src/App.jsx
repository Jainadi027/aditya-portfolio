import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contactpage from "./Pages/ContactMe/ContactMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
