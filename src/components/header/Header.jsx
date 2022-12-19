import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img className="header__icon" src="/images/IMDB_Logo_2016.png" alt="IMDB-logo" />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>{" "}
        </Link>
        <SearchBar placeholder="Search Movies" />
        
      </div>
    </div>
  );
};

export default Header;
