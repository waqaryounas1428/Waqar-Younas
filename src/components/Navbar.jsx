import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Waqar Younas</div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={handleNavClick}>Home</a></li>
        <li><a href="#about" onClick={handleNavClick}>About</a></li>
        <li><a href="#expertise" onClick={handleNavClick}>Expertise</a></li>
        <li><a href="#timeline" onClick={handleNavClick}>Journey</a></li>
        <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
        <li><a href="#toolkit" onClick={handleNavClick}>Toolkit</a></li>
        <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
      </ul>
    </nav>
  );
};