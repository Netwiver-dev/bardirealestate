import React, { useState } from "react";
import "../assets/css/Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!navOpen);
  };
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">
        <img src="../../assets/images/logo_text.png" height="50px" />
      </div>
      <nav className={navOpen ? "active" : ""}>
        <img
          src="../../assets/images/logo_text.png"
          className="logo-mobile"
          height="50px"
        />
        <a onClick={() => navigate(`/`)}>Home</a>
        <a href="#services">Service</a>
        <a href="#residences">Residences</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact</a>
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
