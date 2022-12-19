import React, { useState, useEffect, createContext } from "react";

const MovieContext = createContext([]);

const MovieProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);
  const [movieHistory, setMovieHistory] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }, []);

  return (
    <MovieContext.Provider value={[movieList, setMovieList, movieHistory, setMovieHistory]}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
