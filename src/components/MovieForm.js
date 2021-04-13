import React from "react";
import {useState} from 'react';
import InputField from "./InputField";

const MovieForm=({addmovie})=>{
    const[movieTitle,setMovieTitle]=useState('');
    const[movieYear,setmovieYear]=useState('');
    const[titleError,settitleError]=useState('');
    const[yearError,setYearError]=useState('');
    
  
    const resetForm=()=>{
      setMovieTitle('');
      setmovieYear('');
    }

    const validateForm=()=>{
      resetErrors();
      let validate=true;
      if(!movieTitle){
        settitleError('영화제목 넣어주세요');
       validate=false;
      }
      if(!movieYear){
        setYearError('영화연도 넣어주세요');
        validate=false;
      }
      
      return validate
    }

    const resetErrors=()=>{
      settitleError('');
      setYearError('');
    }
    
    const onSubmit=(e)=>{
      e.preventDefault();
      if(validateForm()){
        addmovie({
          id:Date.now(),
          title:movieTitle,
          year:movieYear
        });
        resetErrors();
        resetForm();
      }
    };
    return ( 
    <form onSubmit={onSubmit}>
      <InputField 
        type="text"
        value={movieTitle}
        placeholder="영화제목"
        onChange={e=>setMovieTitle(e.target.value)}
        errorMessage={titleError}
      />

     {/*  <input type="text"
      value={movieTitle}
        placeholder="영화제목"
      onChange={e=>setMovieTitle(e.target.value)}
      /><br/>
      <div style={{color:'red'}}>{titleError}</div> */}
     
      <InputField 
        type="number"
        value={movieYear}
        placeholder="개봉연도"
        onChange={e=>setmovieYear(e.target.value)}
        errorMessage={yearError}
      />


      {/* <input 
      type="number" 
      value={movieYear}
      placeholder="개봉연도"
      onChange={e=>setmovieYear(e.target.value)}
      /><br/>
      <div style={{color:'red'}}>{yearError}</div> */}
      
      <button type="submit">영화 추가</button>
    </form>
    );
};

export default MovieForm;