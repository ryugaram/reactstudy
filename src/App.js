
import './index.css'; 
import React,{useEffect,useState} from 'react';
import Movie  from "./components/Movie";
import MovideForm from "./components/MovieForm";

function App() {
  const[movies,setMovies]=useState([]);

  const removeMovie =(id)=>{
    setMovies(movies.filter(movie => {
      return movie.id!==id;
    }))
  };


  const renderMovies=movies.length ?movies.map(movie =>{
    return (
    <Movie movie={movie}
     key={movie.id}
     removeMovie={removeMovie}
     ></Movie>
    );
  }) : '추가된 영화가 없습니다.';

  const addmovie=(movie)=>{
    setMovies([
      ...movies,
       movie
    ])
  }
  return (
      <div className="App">
        <h1>good moovie</h1>
        <MovideForm addmovie={addmovie}/>
        <br/>
        {renderMovies}
      </div>
  );
  }
export default App;
