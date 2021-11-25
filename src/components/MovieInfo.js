import axios from 'axios';
import {useEffect, useState} from 'react'
import {API_KEY} from '../App'





const MovieInfo = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const {chosen} = props;
    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?i=${chosen}&apikey=${API_KEY}`) 
    .then((response)=>setMovieInfo(response.data));

    }, [chosen]);


    return(
        <div className="container">
            {
                movieInfo ? ( 
                <>
                <img src={movieInfo?.Poster}/>
            <div className="movieDescription">
                <span className="movieInfo"><b>Title:</b> {movieInfo?.Title}</span>
                <span className="movieInfo"><b>Year:</b> {movieInfo?.Year}</span>
                <span className="movieInfo"><b>IMDB Rating:</b> {movieInfo?.imdbRating}</span>
                <span className="movieInfo"><b>Duration:</b> {movieInfo?.Runtime}</span>
                <span className="movieInfo"><b>Type:</b> {movieInfo?.Type}</span>
                <span className="movieInfo"><b>Director:</b> {movieInfo?.Director}</span>
                <span className="movieInfo"><b>Writer:</b> {movieInfo?.Writer}</span>
                <span className="movieInfo"><b>Actors:</b> {movieInfo?.Actors}</span>
                <span className="movieInfo"><b>Story:</b> {movieInfo?.Plot}</span>
                <span className="movieInfo"><b>Language:</b> {movieInfo?.Language}</span> 



            </div>
           <span onClick={()=>props.setChosen()} className="closeButton">
               X
           </span>
                
               </> 
                 ) : (
                    "Loading..."
                  )}
            
            
            
            </div>
    );

};
export default MovieInfo ;