import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import blogsData from "../assets/data/blogs.json";
import Header from "../components/Header";
import "../assets/css/pages/BlogPage.css";

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogsData.find((b) => b.id === parseInt(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog not found!</h2>
        <p>Sorry, the blog you're looking for doesn't exist.</p>
      </div>
    );
  }

  const splitDescription = (desc) => desc.split("\n");

  const handleRelatedBlogClick = (relatedId) => {
    navigate(`/blog/${relatedId}`);
  };

  // Get 3 random blogs for related posts
  const relatedBlogs = blogsData
    .filter((b) => b.id !== blog.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <Header />
      <motion.section
        className="blog-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="blog-header">
          <motion.img
            src={"../../" + blog.image}
            alt={blog.name}
            className="blog-page-image"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="blog-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="blog-page-title">{blog.name}</h1>
            <p className="blog-page-date">{blog.date}</p>
          </motion.div>
        </div>

        <div className="blog-content">
          <motion.div
            className="blog-page-desc"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {splitDescription(blog.desc).map((line, index) => (
              <p key={index} className="blog-description-line">
                {line}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="related-posts">
          <h2 className="related-posts-title">Related Posts</h2>
          <div className="blogs-slider">
            {relatedBlogs.map((relatedBlog) => (
              <div
                key={relatedBlog.id}
                className="blog-card"
                onClick={() => handleRelatedBlogClick(relatedBlog.id)}
              >
                <img
                  src={"../../" + relatedBlog.image}
                  alt={relatedBlog.name}
                  className="blog-image"
                />
                <div className="blog-content">
                  <h3 className="blog-name">{relatedBlog.name}</h3>
                  <p className="blog-date">{relatedBlog.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default BlogPage;
