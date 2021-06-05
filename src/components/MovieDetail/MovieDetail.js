import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from '../../ReduxStore/Action/MovieAction';

const MovieDetail = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { movieDetail:movie } = useSelector(store=>store.allMovie);

    
    
    useEffect(()=>{
        dispatch(getMovieDetail(id));
    }, [dispatch, id])
    return (
        <div className="container">
            <div className="row mt-3">
                { movie && <div className="col-md-12 d-flex justify-content-evenly">
                    <div>
                       <h5>Title: {movie.Title}</h5>
                       <h6>Year: {movie.Year}</h6> 
                    </div>
                    <img src={movie.Poster} alt="" />
                </div>}                
            </div>
        </div>
    );
};

export default MovieDetail;