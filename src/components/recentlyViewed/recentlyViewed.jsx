import { Divider } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { MovieContext } from '../../Contexts/movieContext'
import MovieList from '../movieList/movieList'

function RecentlyViewed() {

    const [,,movieHistory] = useContext(MovieContext)

  return (
    <>
    <Divider variant='middle' color='white' />
    <h2>Recently Viewed</h2>
    <MovieList movieList={movieHistory}  />
    </>
  )
}

export default RecentlyViewed