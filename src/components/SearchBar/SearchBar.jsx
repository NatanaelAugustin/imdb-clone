/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import "./SearchBar.css"
import { MovieContext } from "../../Contexts/movieContext";
//import SearchIcon from "@material-ui/icons/Search";
// import { useParams } from "react-router-dom";

// const FindMovie = () => {

//     const [searchInput, setSearchInput] = useState("");
//     const {type} = useParams()

//     useEffect(() => {
//         movies()
//     }, [])

//     useEffect(() => {
//         movies()
//     }, [movies, type])

//     const movies = () => [
//         fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=f12ad4185cf17d80af9c1ff6f4a7372b`)
//         .then(res => res.json())
//         .then(data =>FindMovie(data.results))
//     ];

// const handleChange = (e) => {
//     e.preventDefault();
//     setSearchInput(e.target.value)
// };
// if (searchInput.length > 0) {
//     movies.filter((movie) => {
//         return movie.name.match(searchInput);
//     });
// }
// }

//onChange={ handleChange} value={searchInput}

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [, setMoviesList] = useContext(MovieContext)

  const carousel = document.querySelector('.poster');

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    if (!carousel.classList.contains("hidden")) {
      carousel.classList.add("hidden") 
    }
    

    if(e.target.value.length === 0){
      carousel.classList.remove("hidden")
      return;
    }
    

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f12ad4185cf17d80af9c1ff6f4a7372b&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
     .then((res) => res.json())
     .then(data => {
      if(!data.errors) {
        setMoviesList(data.results)
      } else {
        setMoviesList([])
      }
    });
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder="Search Movies" value={query} onChange={onChange} />
        <div className="searchIcon"></div>
      </div>
      <div className="dataResult">
        {/* {results.length > 0 && (
          <ul>
            {results.map((movie) => (
              <li key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default SearchBar;
