import React from 'react'
import './App.css';

function App() {
  return (
    <div className="total">
      <div className="navbar">
        <div className="titledetails">
      <i className="movieicon fas fa-film"></i>        
      <h1 className="title">Movie Listing Site</h1>
      </div>
        <div className="searchbar">
           <i className="searchicon fas fa-search"></i>        
           <input className="search" type="text" placeholder="Moive/Series"/>
        </div>
        
        </div>
    </div>
  );
  }

export default App;
