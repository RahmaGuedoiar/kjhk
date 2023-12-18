import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Description = ({N}) => {
  // utilisé useParams et filter  pour lire la partie de path apres movies/ et le camparé avec le titer de film et filter les donne exact qui doit l'afichhéer
    const param=useParams()
    var Y=N.filter((a)=>a.title==param.name)
    const navg=useNavigate()

  return (
    <div className='des'>
      <h1>{Y[0].title}</h1>
      {<iframe width="900" height="515" src={Y[0].trailerlink}/>}
      <p>{Y[0].description}</p>
      {/* un bouton permet un l'utlisateur de revenir à la page d'accueil */}
      <button onClick={()=>navg('/')}>Back</button>
      
    </div>
  )
}

export default Description