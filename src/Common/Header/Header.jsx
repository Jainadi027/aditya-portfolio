import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa"; // Using react-icons for nicer icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h2 className="logo">Aditya Jain</h2>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>
          Projects & Certificates
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>

        {/* Theme toggle button after Contact Me */}
        <button
          className={`theme-toggle ${theme}`}
          onClick={toggleTheme}
          type="button"
          title="Toggle Theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}
