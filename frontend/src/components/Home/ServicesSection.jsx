import React from 'react';
import "../../assets/css/components/ServicesSection.css";

const services = [
  {
    title: 'Expert Guidance',
    description:
      "Benefit from our team's seasoned expertise for a smooth buying experience",
    icon: '🗺️', 
  },
  {
    title: 'Personalized Service',
    description:
      'Our services adapt to your unique needs, making your journey stress-free',
    icon: '🧑‍💼',
  },
  {
    title: 'Transparent Process',
    description:
      'Stay informed with our clear and honest approach to buying your home',
    icon: '📄',
  },
  {
    title: 'Exceptional Support',
    description:
      'Providing peace of mind with our responsive and attentive customer service',
    icon: '📞',
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

