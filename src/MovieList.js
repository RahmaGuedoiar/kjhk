import React from 'react'
import MovieCard from './MovieCard'


const MovieList = (props) => {
  return (
   
    <div className='info'>{ props.M.map(el => <MovieCard    pr={el} Movies={props.M} setMovies={props.setMovies}   />)}</div>
  
  )
}

export default MovieList