import React from "react";
import "../../assets/css/components/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="image-section">
        <img
          src="./assets/images/pages/home/luxury.png"
          alt="Modern house"
          className="image"
        />
      </div>
      <div className="content-section">
        <h1>We Help You To Find Your Dream Home</h1>
        <p>
        We are number one Real Estate Company in Nigeria, we offer our clients the best deals in the real estate value chain and we create cash flow generating assets for our investors. 
        </p>
        <div className="stats">
          <div className="stat">
            <h2>8K+</h2>
            <p>Houses Available</p>
          </div>
          <div className="stat">
            <h2>6K+</h2>
            <p>Houses Sold</p>
          </div>
          <div className="stat">
            <h2>2K+</h2>
            <p>Trusted Agents</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
