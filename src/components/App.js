import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from '../reducers';

import NavbarContainer from '../containers/NavbarContainer';
import MovieListContainer from '../containers/MovieListContainer';
import GlobalStyles, { Container } from './App.style.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)}>
        <GlobalStyles />
        <Container>
          <NavbarContainer />
          <MovieListContainer />
        </Container>
      </Provider>
    );
  }
}

export default App;
