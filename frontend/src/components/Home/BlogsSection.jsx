import React from "react";
import "../../assets/css/components/BlogsSection.css";
import blogsData from "../../assets/data/blogs.json";
import { useNavigate } from "react-router-dom";

const BlogsSection = () => {
  const navigate = useNavigate();

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <section id="blogs" className="blogs-section">
      <h2 className="blogs-title">Blogs</h2>
      <div className="blogs-slider">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="blog-card"
            onClick={() => handleBlogClick(blog.id)}
          >
            <img src={blog.image} alt={blog.name} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-name">{blog.name}</h3>
              <p className="blog-date">{blog.date}</p>
               </div>
          </div>
        ))}
      </div>
     
    </section>
  );
};

export default BlogsSection;
