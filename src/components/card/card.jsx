import React, { useContext } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { MovieContext } from "../contexts/movieContext";

const Card = ({ movie }) => {
  const [, , movieHistory, setMovieHistory] = useContext(MovieContext);
  const handleClick = () => {
    if (movieHistory.find((historyMovie) => historyMovie.id === movie.id)) {
      return;
    }

    if (movieHistory.length > 4) {
      const newHistory = [...movieHistory];
      newHistory.pop();
      newHistory.unshift(movie);
      setMovieHistory(newHistory);
    } else {
      setMovieHistory((prevHistory) => [movie, ...prevHistory]);
    }
    return;
  };

  return (
    <>
      {
        <Link onClick={handleClick} to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
          <div className="cards">
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
              alt={"current movie"}
            />
            <div className="cards__overlay">
              <div className="card__title">{movie ? movie.original_title : ""}</div>
              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
            </div>
          </div>
        </Link>
      }
    </>
  );
};

export default Card;
