import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../assets/data/blogs.json";
import "../assets/css/pages/BlogPage.css";
import Header from "../components/Header";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <>
      <Header />
      <section className="blog-page">
        <img src={blog.image} alt={blog.name} className="blog-page-image" />
        <h2 className="blog-page-title">{blog.name}</h2>
        <p className="blog-page-date">{blog.date}</p>
        <p className="blog-page-desc">{blog.desc}</p>
      </section>
    </>
  );
};

export default BlogPage;
