import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">WAQAR YOUNAS</h3>
          <p className="footer-tagline">MERN Stack Developer</p>
          <p className="footer-description">
            Building modern web applications with passion and precision.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a 
              href="https://github.com/waqaryounas1428" 
              className="social-icon" 
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/waqar-younas1428" 
              className="social-icon" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://twitter.com/waqaryounas1428" 
              className="social-icon" 
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a 
              href="mailto:waqaryouns1428@gmail.com" 
              className="social-icon" 
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Made with <FaHeart className="heart-icon" /> by Waqar Younas © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
