import { Divider } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { MovieContext } from "../contexts/movieContext";
import MovieList from "../movieList/movieList";
import "./recentlyViewed.css";

function RecentlyViewed() {
  const [, , movieHistory] = useContext(MovieContext);

  return (
    <>
      <Divider variant="middle" color="white" />
      <h2 className="bottom-header">Recently Viewed</h2>
      <MovieList movieList={movieHistory} />
    </>
  );
}

export default RecentlyViewed;
