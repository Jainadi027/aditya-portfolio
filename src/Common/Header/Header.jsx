import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
//import PurviCV from "../../assets/Purvi_resume.pdf";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h2 className="logo">Aditya Jain</h2>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects & certificates</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>      
      </nav>
    </header>
  );
}
