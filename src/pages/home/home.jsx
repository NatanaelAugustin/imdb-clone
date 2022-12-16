import React, { useContext } from "react";
import MovieList from "../../components/movieList/movieList";
import { MovieContext } from "../../contexts/movieContext";
import Carousel from "../../components/carousel/carousel";
import Layout from "../../components/layout/layout";

const Home = () => {
  const [moviesList] = useContext(MovieContext);

  return (
    <Layout>
      <Carousel moviesList={moviesList} />
      <MovieList movieList={moviesList} />
    </Layout>
  );
};

export default Home;
