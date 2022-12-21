import React, {useState} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";



const Header = () => {

  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="header">
      { <Link to="/">{ <img className="header__icon" src="/images/IMDB_Logo_2016.png" alt="IMDB-logo" /> }</Link> }
      <div className="header-container-left">
        <div className="links" id={showLinks ? "hidden" : ""}>
          
          <Link to="/movies/popular" style={{ textDecoration: "none" }}>
            <span>Popular</span>
          </Link>
          <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
            <span>Top Rated</span>
          </Link>
          <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
            <span>Upcoming</span>{" "}
          </Link>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
        {""}
        
        </button>
      </div>
      <div className="header-container-right">{ <SearchBar placeholder="Search Movies" /> }</div>
    </div>
  );
};

export default Header;
