import React, { useRef } from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Fil = ({ ftext, fnote, setFnote, setFtext }) => {
  const filtext = useRef()
  const filnote = useRef()
  return (
    <div className='FIL'>
      <div> <img src='rech.png' id='rech'></img></div>
      <div>
       
        <input type='text' placeholder='Title Movie'
          ref={filtext}
          onChange={() => {
            setFtext(filtext.current.value)
          }} >
        </input>
      </div>
      <div>
        <StarRatingComponent
          name="rate3"
          starCount={10}
          value={fnote}
          onStarClick={(value) => { setFnote(value) }}
        />
      </div>

    </div>
  )
}

export default Fil