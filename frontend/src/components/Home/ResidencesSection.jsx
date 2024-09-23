import React from "react";
import "../../assets/css/components/ResidencesSection.css";

const residences = [
  {
    title: "San Francisco, California",
    rooms: "4 Rooms",
    size: "3,500 sq ft",
    price: "$2,500,000",
    image: "https://placehold.co/600x400.png", // Replace with actual image URL
  },
  {
    title: "Beverly Hills, California",
    rooms: "3 Rooms",
    size: "1,500 sq ft",
    price: "$850,000",
    image: "https://placehold.co/600x400.png", // Replace with actual image URL
  },
  {
    title: "Palo Alto, California",
    rooms: "6 Rooms",
    size: "4,000 sq ft",
    price: "$3,700,000",
    image: "https://placehold.co/600x400.png", // Replace with actual image URL
  },
];

const ResidencesSection = () => {
  return (
    <section className="popular-residences">
      <h2 className="residences-title">Our Popular Residences</h2>
      <div className="residences-grid">
        {residences.map((residence, index) => (
          <div key={index} className="residence-card">
            <img
              src={residence.image}
              alt={residence.title}
              className="residence-image"
            />
            <div className="residence-details">
              <h3 className="residence-title">{residence.title}</h3>
              <div className="residence-info">
                <span>{residence.rooms}</span>
                <span>{residence.size}</span>
              </div>
              <button className="signup-btn">Sign up</button>
              <p className="residence-price">{residence.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResidencesSection;
