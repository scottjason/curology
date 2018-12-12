import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { debounce } from "debounce";
import { setSearchTerm } from '../actions/searchActionCreators';
import SearchBar from '../components/SearchBar/SearchBar';

/** 
*
* Handles redux state changes for the `SearchBar` component
*
* Note: The `MovieListContainer` makes the api request whenever
* there's a change in the search input, this container
* debounces the action that sets that value in redux by 200ms
*
*/

class SearchBarContainer extends PureComponent {
  componentWillMount() {
    this.onInputChange = debounce(term => this.props.setSearchTerm(term), 200);
  }
  render() {
    return (
      <React.Fragment>
        <SearchBar onInputChange={term => this.onInputChange(term)} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state.searchbar,
})

const mapDispatchToProps = dispatch => ({
  setSearchTerm(term) {
    dispatch(setSearchTerm(term))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
