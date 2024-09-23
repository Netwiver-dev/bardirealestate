import React from 'react';
import "../../assets/css/components/SearchBar.css";

const SearchBar = () => (
  <section className="search-bar">
    <select>
      <option>Location</option>
    </select>
    <select>
      <option>Type</option>
    </select>
    <select>
      <option>Price Range</option>
    </select>
    <button className="signup-btn">Sign up</button>
  </section>
);

export default SearchBar;