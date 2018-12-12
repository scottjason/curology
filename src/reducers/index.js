import { combineReducers } from 'redux';
import searchBar from './searchBarReducer';
import movieList from './movieListReducer';

export default combineReducers({
  searchBar,
  movieList,
})