import React from 'react'
import AddFav from './AddToFav';

const MovieComponent = (props) => {
    const {Title, Year, imdbID, Type, Poster} = props.movie;




    return(
        <div onClick={()=>props.setChosen(imdbID)} className="movieComponent">
            <img src={Poster}/>
            
            <span className="movieName">{Title}</span>
            <div className="infoColumn">
                <span className="movieInfo">Year: {Year}</span>
                <span className="movieInfo">Type: {Type}</span>
            </div>

          <AddFav/>

            </div>
    )
    

};
export default MovieComponent