import { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // default dark

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="header">
      <h2 className="logo">Aditya Jain</h2>

      {/* Right Side Icons */}
      <div className="header-right">
        
        {/* Theme Toggle */}
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </div>

        {/* Hamburger */}
        <div 
          className={`hamburger ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects & Certificates</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>      
      </nav>
    </header>
  );
}
