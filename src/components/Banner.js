import React, { useEffect, useState } from 'react';
import classes from './Banner.module.css';
import axios from '../axios';
import requests from '../request';

const Banner=()=>{
    const [movie, setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
        }fetchData();
    },[]);
    function truncate(str ,n){
        return str?.length > n ? str.substr(0,n-1)+ "...":str;
    }
    return(
        <>
        <header className={classes.banner} 
        style={
            {
                backgroundSize: "cover",
                backgroundImage:`url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center-center",
            }
        }
        >
        
        <div className={classes.banner_contents}>
            <h1 className={classes.banner_title}>{movie?.name || movie?.title ||movie?.orignal_name}</h1>
        
        <div className={classes.banner_buttons}>
            <button className={classes.banner_button}>
                Play
            </button>
            <button className={classes.banner_button}>
                My List
            </button>
        </div>
            <h1 className={classes.banner_description}>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="banner--fadeBottom"/>
        </header>
        </>
    )
}
export default Banner;