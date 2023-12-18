import React from 'react'
import { useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

const AddMovies = ({ Movies, setMovies }) => {
  const title = useRef()
  const description = useRef()
  const posterURL = useRef()
  const [rate, setRate] = useState(0)
  return (
    <div className='in'>
      
        <input type='text' ref={title} placeholder='write the movie title' />
        <input type="text" ref={description} placeholder='write the movie description' />
        <input type="text " ref={posterURL} placeholder='put URl of image of film' />
      
     
        <StarRatingComponent
          name="rate2"
          starCount={10}
          value={rate}
          onStarClick={(value) => { setRate(value) }}
        />
      

      <button id='but' onClick={() => { setMovies([...Movies, { title: title.current.value, description: description.current.value, posterURL: posterURL.current.value, rating: rate }]) }}> Add movies</button>
    </div>
  )
}

export default AddMovies