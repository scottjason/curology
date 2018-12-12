import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar/Navbar';
import { getPopularMovies } from '../actions/movieActionCreators';

/** 
*
* Fetches popular movies onload
*
*/

class NavbarContainer extends PureComponent {
  componentDidMount() {
    this.props.getPopularMovies();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state.movieList,
})

const mapDispatchToProps = dispatch => ({
  getPopularMovies(term) {
    dispatch(getPopularMovies(term));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
