import React, { useState } from "react";
import "../assets/css/Header.css";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="./assets/images/logo_text.png" height="50px" />
      </div>
      <nav className={navOpen ? "active" : ""}>
        <img
          src="./assets/images/logo_text.png"
          className="logo-mobile"
          height="50px"
        />
        <a href="#">Home</a>
        <a href="#">Service</a>
        <a href="#">Agents</a>
        <a href="#">Contact</a>
      </nav>
      <div className="actions">
        <a href="tel:+07050543276" className="btn">
          Get in touch <i className="fas fa-phone"></i>
        </a>
        <i
          className={
            navOpen ? "fas fa-times toggle-nav" : "fas fa-bars toggle-nav"
          }
          onClick={handleToggleNav}
        ></i>
      </div>
    </header>
  );
};

export default Header;
