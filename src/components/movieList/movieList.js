/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from "react";
import "./movieList.css"
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=f12ad4185cf17d80af9c1ff6f4a7372b`)
        .then(res => res.json())
        .then(data =>setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    )
                  )
                }
            </div>
        </div>
    )
}

export default MovieList