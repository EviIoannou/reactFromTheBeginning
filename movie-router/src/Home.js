import React, { Component } from 'react';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';

class Home extends  Component{
    constructor() {
        super();
        this.state = {
            movieList: []
        }
    }
    componentDidMount() {
        const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
        axios.get(nowPlayingUrl).then((response)=>{
            const movieData = response.data.results
            this.setState({
                movieList: movieData
            })
        })
    }
    

    render() {
        const imageUrl = "http://image.tmdb.org/t/p/w300";
        const movieGrid = this.state.movieList.map((movie, i)=> {
            return (
                <div className="col s4" key={i}>
                    <Link to={`/movie/${movie.id}`}>
                      <img src={`${imageUrl}${movie.poster_path}`} />  
                    </Link>            
                </div>
            )
        })
        return(
            <div className="row">
                {movieGrid}
            </div>
        )        
    }

}

export default Home;