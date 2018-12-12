import axios from 'axios';
import {
  TMDB_MOVIE_REQ_BASE_PATH,
  TMBD_CONFIG_REQ_BASE_PATH,
  TMBD_GET_POPULAR_REQ_PATH,
} from '../constants';

export const getMoviesByTerm = (term, page) => {
  console.log('page', page)
  let url = `${TMDB_MOVIE_REQ_BASE_PATH}&query=${term}&page=${page}`;
  return axios.get(url)
    .then(res => onGetMoviesSuccess(res, term, page))
    .catch(onReqError);
}

export const getPopularMovies = () => {
  return axios.get(TMBD_GET_POPULAR_REQ_PATH)
    .then(onGetPopularMoviesSuccess)
    .catch(onReqError);
}

export const getMovieConfig = () => {
  return axios.get(TMBD_CONFIG_REQ_BASE_PATH)
    .then(onGetMovieConfigSuccess)
    .catch(onReqError);
}

function onGetMoviesSuccess(res, term, page) {
  console.log('on get movies success', page)
  return {
    type: 'GET_MOVIES_BY_TERM_SUCCESS',
    payload: res.data.results,
    lastSearch: {term, page},
  }
}

function onGetPopularMoviesSuccess(res) {
  return {
    type: 'GET_POPULAR_MOVIES_SUCCESS',
    payload: res.data.results,
  }
}

function onGetMovieConfigSuccess(res) {
  return {
    type: 'GET_MOVIE_CONFIG_SUCCESS',
    payload: res.data.images,
  }
}

function onReqError(err) {
  return {
    type: 'API_REQ_ERROR',
    payload: err,
  }
}
