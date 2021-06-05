import { GET_MOVIE_DETAIL, SET_MOVIES } from "../ActionType/ActionType";

// initial state
const initialState = {
    movies:[],
    movieDetail:{}
}

export const MovieReducer = (state=initialState, action)=>{

    switch(action.type){
        case GET_MOVIE_DETAIL:
            const newMovie = state.movies.find(movie=>movie.imdbID==action.payload);
            return {...state, movieDetail:newMovie};
        case SET_MOVIES:
            return {...state, movies:action.payload};
        default:
            return state;
    }
}