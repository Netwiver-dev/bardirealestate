import React from "react";
import "../../assets/css/components/HeroSection.css";
const HeroSection = () => (
  <section className="hero">
    <div className="text">
      <img src="./assets/images/logo_text.png" height="100px" width="230px" />

      <h1>Find Your Dream Home</h1>
      <p>Explore our curated selection of exquisite properties...</p>
    </div>
    <img
      src="./public/assets/images/pages/home/hero.png"
      alt="Modern house with large windows and a beautiful garden"
    />
  </section>
);

export default HeroSection;
