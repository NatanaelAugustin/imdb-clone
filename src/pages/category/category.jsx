import React, {useEffect, useState } from 'react'
import { useCallback } from 'react'
import MovieList from '../../components/movieList/movieList'
import { useParams } from 'react-router-dom'
import Layout from '../../components/layout/layout'




const Category = () => {

    
    const [movies, setMovies] = useState([])
    const {type} = useParams()

    const getData = useCallback(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=f12ad4185cf17d80af9c1ff6f4a7372b`)
        .then(res => res.json())
        .then(data =>setMovies(data.results))
    }, [type])

     useEffect(() => {
        getData()
    }, [getData, type])


   

  return (
    <Layout>
      <h2 className="list__title"> {type.toUpperCase()}</h2>
      <MovieList movieList={movies} />
    </Layout>
  )
}

export default Category