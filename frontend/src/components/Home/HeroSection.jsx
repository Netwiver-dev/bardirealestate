// HeroSection.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../assets/css/components/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        className="hero-carousel"
      >
        <div>
          <img src="./assets/images/pages/home/bg.png" alt="Dream Home 1" />
        </div>
        <div>
          <img src="./assets/images/pages/home/luxury.png" alt="Dream Home 2" />
        </div>
        <div>
          <img src="./assets/images/pages/home/house.png" alt="Dream Home 3" />
        </div>
      </Carousel>
      <div className="hero-content">
        <h1>Discover Your Dream Home</h1>
        <p>
          Unlock the door to your perfect home with our exclusive selection of
          premium properties.
        </p>
        <button className="cta-button">Get In touch</button>
      </div>
    </div>
  );
};

export default HeroSection;
