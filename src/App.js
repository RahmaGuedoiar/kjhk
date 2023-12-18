
import list from './List'
import { useRef, useState } from 'react'
import MovieList from './MovieList'
import AddMovies from './AddMovies';
import Fil from './FT';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Description from './Description';



const App = () => {
  const [Movies, setMovies] = useState(list)
  const [ftext, setFtext] = useState("")
  const [fnote, setFnote] = useState(0)


  return (
    <div className='con1'>
      {/* créée de routes pour naviguer entres les compouents . */}
     <Routes>
     <Route path="/" element={
      <div>
      <AddMovies Movies={Movies} setMovies={setMovies}></AddMovies>
      <Fil ftext={ftext} fnote={fnote} setFtext={setFtext} setFnote={setFnote}></Fil>

      <div><MovieList M={Movies.filter((a) => a.title.toLowerCase().trim().includes(ftext.toLowerCase().trim()) && a.rating >= fnote)} setMovies={setMovies} ></MovieList></div>
      </div>}/>
      {/* chaque fois que je clik sur le film le path devient /movies/nom de film  */}
      <Route path="/movies/:name" element={<Description N={Movies}/>}/>
      
      </Routes>
     
    </div>


  )
}

export default App
