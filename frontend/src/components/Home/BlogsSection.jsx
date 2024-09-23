import React from 'react';
import "../../assets/css/components/BlogsSection.css";

const blogs = [
  {
    name: 'Sarah Nguyen',
    location: 'San Francisco',
    rating: 5.0,
    review:
      'Dwellio truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.',
    image: 'https://placehold.co/600x400.png', // Replace with actual image URL
  },
  {
    name: 'Michael Rodriguez',
    location: 'San Diego',
    rating: 4.5,
    review:
      'I had a fantastic experience working with Dwellio. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!',
    image: 'https://placehold.co/600x400.png', // Replace with actual image URL
  },
  {
    name: 'Emily Johnson',
    location: 'Los Angeles',
    rating: 5.0,
    review:
      "Dwellio made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
    image: 'https://placehold.co/600x400.png', // Replace with actual image URL
  },
];

const BlogsSection = () => {
  return (
    <section className="blogs-section">
      <h2 className="blogs-title">Blogs</h2>
      <div className="blogs-slider">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.name} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-name">{blog.name}</h3>
              <p className="blog-location">{blog.location}</p>
              <p className="blog-review">{blog.review}</p>
              <div className="blog-rating">
                <span>⭐ {blog.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="blog-navigation">
        <button className="nav-button">&#10094;</button>
        <button className="nav-button">&#10095;</button>
      </div>
    </section>
  );
};

export default BlogsSection;
