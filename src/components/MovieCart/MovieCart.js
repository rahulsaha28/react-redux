import React from 'react';
import { Link } from 'react-router-dom';

const MovieCart = ({ imdbID, Poster }) => {
    return (
        <div className="col-md-3 card col-sm-12 mb-2">
            <img src={Poster} className="card-img-top" alt="" />
            <div className="card-body">
                <Link className="btn btn-success" to={`/movie/${imdbID}`}>See More Info</Link>
            </div>
        </div>
    );
};

export default MovieCart;