import React,{useState} from 'react';
import MovieForm from "../components/MovieForm"
import Movie from "../components/Movie"

const Movies = () => {
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
        <div>
            <h1>good moovie</h1>
            <MovieForm addmovie={addmovie}/>
            <br/>
            {renderMovies}
        </div>
    );
};

export default Movies;