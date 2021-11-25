import React,{useState} from 'react'
import './App.css';
import MovieComponent from './components/MovieComponent';
import axios from 'axios';
import MovieInfo from './components/MovieInfo';

export const API_KEY = '1a069c3a';



function App() {
  const [search, setSearch] = useState();
  const [timeoutId,setTimeoutId] = useState();
  const [movieList, setMovieList] = useState([]);
  const [chosen, setChosen] = useState();


const fetchData = async(searchMovie) => {
  const response = await axios.get(`https://www.omdbapi.com/?s=${searchMovie}&apikey=${API_KEY}`);
console.log(response)
setMovieList(response.data.Search)
};




const onSearch = (e)=>{
  clearTimeout(timeoutId);
  setSearch(e.target.value);
 const timeout = setTimeout(()=>fetchData(e.target.value), 500)
  setTimeoutId(timeout);
};




  return (
    <div className="total">
      <div className="navbar">
        <div className="titledetails">
      <i className="movieicon fas fa-film"></i>        
      <h1 className="title">Movie Listing Site</h1>
      </div>
        <div className="searchbar">
           <i className="searchicon fas fa-search"></i>        
           <input onChange={onSearch} value={search} setChosen={setChosen} className="search" type="text" placeholder="Search Moive/Series"/>
        </div>
        
        </div>


        {chosen && <MovieInfo chosen={chosen} setChosen={setChosen}/>}





        <div className="movieListContainer">
          {
            movieList?.length? movieList.map((movie, index)=><MovieComponent key={index} movie={movie} setChosen={setChosen} />)
            :
            <div>
              <img className="homeImage" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg"/>

            </div>
          }
      
        







        </div>


    </div>
  );
  }

export default App;
