import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="imdb-clone\public\IMDB_Logo_2016.png"
            alt=""
          />{" "}
        </Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/toprated">Top Rated</Link>
        <Link to="/movies/upcoming">Upcoming </Link>
      </div>
    </div>
  );
};

export default Header;
