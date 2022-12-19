import React, { useContext, useState } from "react";
import "./SearchBar.css";
import { MovieContext } from "../contexts/movieContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [, setMoviesList] = useContext(MovieContext);

  const carousel = document.querySelector(".poster");

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if (!carousel.classList.contains("hidden")) {
      carousel.classList.add("hidden");
    }

    if (e.target.value.length === 0) {
      carousel.classList.remove("hidden");
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f12ad4185cf17d80af9c1ff6f4a7372b&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMoviesList(data.results);
        } else {
          setMoviesList([]);
        }
      });
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder="Search Movies" value={query} onChange={onChange} />
      </div>
    </div>
  );
};

export default SearchBar;
