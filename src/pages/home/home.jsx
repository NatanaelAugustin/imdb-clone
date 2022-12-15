import React, { useContext } from "react";
import MovieList from "../../components/movieList/movieList";
import { MovieContext } from "../../Contexts/movieContext";
import Carousel from "../../components/Carousel/carousel";
import Layout from "../../components/layout/layout";

const Home = () => {
  const [moviesList] = useContext(MovieContext)
  // const [popularMovies, setPopularMovies] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/popular?api_key=f12ad4185cf17d80af9c1ff6f4a7372b")
  //     .then((res) => res.json())
  //     .then((data) => setPopularMovies(data.results));
  // }, []);

  return (
    <Layout>
      
      <Carousel moviesList={moviesList} />
      <MovieList movieList={moviesList} />
    </Layout>
  );
};

export default Home;
