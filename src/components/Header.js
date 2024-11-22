// src/components/Header.js
import React from "react";
import logo from "../photos/logo.png";
import "./Styles.css";
const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      {/* Adjust the path to your logo */}
      <input
        type="text"
        placeholder="Search courses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
    </header>
  );
};

export default Header;
