import "./Footer.css";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
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
          <p className="footer-location"><FaMapMarkerAlt /> Yamunanagar, Haryana</p>
        </div>

        <div className="footer-right">
          <h4>Connect With Me</h4>
          <div className="social-links">
            <a href="https://github.com/purvibatra06" target="_blank">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/purvi-batra-54b37b295" target="_blank">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
