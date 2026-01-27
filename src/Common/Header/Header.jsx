import { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${theme}`}>
      <Link to="/" onClick={() => setIsOpen(false)} className="logo">
        Aditya Jain
      </Link>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav ref={navRef} className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects & Certificates</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Me</Link>

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
