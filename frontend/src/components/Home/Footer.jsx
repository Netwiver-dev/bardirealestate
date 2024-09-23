import React from "react";
import "../../assets/css/components/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src="./assets/images/logo_text.png" height="50px" />
        </div>
        <p>
          Novare Gateway Mall Musa Yar' Adua Expressway Airport Road Lugbe
          Abuja.
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Our Social</h3>
          <ul className="social-links">
            <li>
              <a href="mailto:bardirealestateltd@gmail.com">
                <i className="fas fa-envelope"></i> Email
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i> Twitter (x)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
