import { MOVIE_API_URL } from '../../services/movies.service';
import Types from '../types';

export const getMovies = (type, pageNumber) => {
  return (dispatch) => {
    dispatch(getMoviesStart);
    MOVIE_API_URL(type, pageNumber)
      .then(response => {
        dispatch(getMoviesSuccess(response.data));
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          dispatch(getMoviesFail(error.response.data));
        }
      });
  };
};

export const loadMoreMovies = (type, pageNumber) => {
  return (dispatch) => {
    dispatch(getMoviesStart);
    MOVIE_API_URL(type, pageNumber)
      .then(response => {
        dispatch(loadMoreMoviesSuccess(response.data));
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          dispatch(getMoviesFail(error.response.data));
        }
      });
  };
};

export const getMoviesStart = () => {
  return ({
    type: Types.MOVIE_LIST_START
  });
};

export const getMoviesSuccess = (movieListResult) => {
  return ({
    type: Types.MOVIE_LIST,
    payload: movieListResult
  });
};

export const loadMoreMoviesSuccess = (movieListResult) => {
  return ({
    type: Types.LOAD_MORE_RESULTS,
    payload: movieListResult
  });
};

export const getMoviesFail = (error) => {
  return ({
    type: Types.SET_ERROR,
    payload: error
  });
};

export const setMovieType = (movieType) => {
  return ({
    type: Types.MOVIE_TYPE,
    payload: movieType
  });
};
