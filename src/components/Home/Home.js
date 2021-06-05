import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../ReduxStore/Action/MovieAction';
import MovieCart from '../MovieCart/MovieCart';

const Home = () => {

    const dispatch = useDispatch()
    const { movies }  = useSelector(store=>store.allMovie)
    
    useEffect(()=>{
        fetch('https://fake-movie-database-api.herokuapp.com/api?s=Star%20Wars')
        .then(res=>res.json())
        .then(data=>dispatch(setMovies(data.Search)))
        
    }, [dispatch])
    return (
        <div className="container">
            <div className="row mt-3 gx-2">
                {
                    movies.map(movie=><MovieCart key={Math.random()} {...movie}/>)
                }
            </div>
        </div>
    );
};

export default Home;