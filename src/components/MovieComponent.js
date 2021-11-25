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
            
            
            </div>
    )

};
export default MovieComponent