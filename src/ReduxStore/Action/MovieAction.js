import { GET_MOVIE_DETAIL, SET_MOVIES } from "../ActionType/ActionType";

// this is the set movies action fn
export const setMovies = movies=>({
    type:SET_MOVIES,
    payload:movies
});

export const getMovieDetail = id=>({
    type:GET_MOVIE_DETAIL,
    payload:id
})