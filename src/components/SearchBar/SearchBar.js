import React from 'react';
import { Input } from './SearchBar.style';

let searchInput; /* defined here to use refs with functional components */

const SearchBar = props => (
  <React.Fragment>
    <Input
      ref={input => searchInput = input}
      type='input'
      placeholder='Search movies...'
      onChange={()=> props.onInputChange(searchInput.value)}
    />
  </React.Fragment>
)

export default SearchBar;
