let initialState = {
  term: '',
};

const searchBar = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default searchBar;
