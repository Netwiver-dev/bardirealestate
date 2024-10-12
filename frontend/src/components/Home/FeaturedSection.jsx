import React from "react";
import Swal from "sweetalert2";
import "../../assets/css/components/ResidencesSection.css";

const featured = [
  {
    image: "./assets/images/pages/home/estate4.jpeg", // Replace with actual image URL
  },
  {
    image: "./assets/images/pages/home/estate5.jpeg", // Replace with actual image URL
  },
  {
    image: "./assets/images/pages/home/estate6.jpeg", // Replace with actual image URL
  },
  {
    image: "./assets/images/pages/home/estate7.jpeg", // Replace with actual image URL
  },
  {
    image: "./assets/images/pages/home/estate8.jpeg", // Replace with actual image URL
  },
  {
    image: "./assets/images/pages/home/estate9.jpeg", // Replace with actual image URL
  },
  {
    image: "./assets/images/pages/home/estate10.jpeg", // Replace with actual image URL
  },
  {
    image: "./assets/images/pages/home/estate11.jpeg", // Replace with actual image URL
  },

];


const FeaturedSection = () => {
  return (
    <section id="residences" className="popular-residences">
      <h2 className="residences-title">Our Featured Residences</h2>
      <div className="residences-grid">
        {featured.map((feature, index) => (
          <div key={index} className="residence-card">
            <img
              src={feature.image}
              className="residence-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
