
import React from "react";
import "./movieList.css";
import Card from "../card/card";

const MovieList = ({ movieList }) => {
  return (
    <div className="movie__list">
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
