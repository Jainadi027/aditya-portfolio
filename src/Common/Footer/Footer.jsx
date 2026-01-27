import "./Footer.css";
import { FaGithub, FaLinkedin, FaMapMarkerAlt,FaTwitter  } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext/ThemeContext";

export default function Footer() {
   const { theme } = useTheme();
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-content">
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul className="quick-links">
            <li><Link to="/About">About Me</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
          </ul>
        </div>

        <div className="footer-location-section">
          <h4>Location</h4>
          <p className="footer-location"><FaMapMarkerAlt />Saharanpur,UP</p>
        </div>

        <div className="footer-right">
          <h4>Connect With Me</h4>
          <div className="social-links">
            <a href="https://github.com/dashboard" target="_blank">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/adityajain027" target="_blank">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://x.com/jainadi027" target="_blank">
              <FaTwitter /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
