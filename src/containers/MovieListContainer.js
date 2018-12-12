import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import MovieList from '../components/MovieList/MovieList';
import { getMoviesByTerm, getMovieConfig } from '../actions/movieActionCreators';

/** 
*
* Fetches movies from the tmdb api
*
*/

class MovieListContainer extends PureComponent {
  componentDidMount() {
    this.props.getMovieConfig();
  }
  
  componentDidUpdate(prevProps) {
    
    /* Make api request if the search input has changed */
    const isEmpty = !this.props.term.length;
    const isEqual = this.props.term === prevProps.term;

    if (!isEmpty && !isEqual) {
        this.props.getMoviesByTerm(this.props.term, 1);
    }
  }
  onClickNext() {
    let lastSearch = this.props.lastSearch;
    if (!lastSearch.term) {
      this.props.getMoviesByTerm(this.props.term, 1);
    } else  {
      let nextPage
      if (typeof lastSearch.page === 'number') {
        let currentPage = lastSearch.page;
        nextPage = currentPage + 1;
      } else {
        nextPage = 1;
      }
      if (this.props.term) {
        this.props.getMoviesByTerm(this.props.term, nextPage);
     }
    }
  }
  
  render() {
    if (!this.props.config.isLoaded) { return null; }
    return (
      <React.Fragment>
        <MovieList
          {...this.props}
          onClickNext={() => this.onClickNext()}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state.searchBar,
  ...state.movieList,
})

const mapDispatchToProps = dispatch => ({
  getMoviesByTerm(term, page) {
    dispatch(getMoviesByTerm(term, page));
  },
  getMovieConfig() {
    dispatch(getMovieConfig());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
