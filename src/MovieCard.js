
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';


const MovieCard = (props) => {

  return (
    <div className='cont'>
      {/* importation du carte du bootstrap et l' affichera tous les attributs de chaque film définis dans le fichier Movielist dans un card .  */}
     <Link to={`/movies/${props.pr.title}`}>
      {/* `l'ajaute de element link  qui contient le card de compouent  Movies card  Chaque fois que je clique sur une fiche de film, cela m'amène à la page de description  */}
      <div >
         
        <Card id='ca'>
          <Card.Img variant="top" src={props.pr.posterURL} id='aa' />
          <Card.Body style={{ backgroundColor: 'rgb(121, 78, 27,0.2)' }} >
            <Card.Title><h2>{props.pr.title}</h2></Card.Title>
            <Card.Text id='tx'>

              <p>description: {props.pr.description}</p>

              <StarRatingComponent
                name="rate1"
                starCount={10}
                value={props.pr.rating}
               
              />
              
            </Card.Text>
          </Card.Body>
          {/* Update of title  */}
          {/* <button onClick={()=>props.setMovies(props.Movies.map((l,i)=>l.title===props.pr.title?{...props.pr,title:"update"}:l))}>update</button> */}
        </Card>

      </div>
      </Link>
    </div>
   



  )

}


export default MovieCard;