let initialState = {
  movies: [],
  config: {
    isLoaded: false,
    imgBasePath: null,
  },
  isPopular: true,
  lastSearch: {term: null, page: null},
};

const movieList = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_BY_TERM_SUCCESS':
      return {
        ...state,
        movies: action.payload.filter(rejectNoImgPath),
        lastSearch: action.lastSearch,
        isPopular: false,
      };
    case 'GET_POPULAR_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
        isPopular: true,
      };
    case 'GET_MOVIE_CONFIG_SUCCESS':
      return {
        ...state,
        config: {
          isLoaded: true,
          imgBasePath: generateImgBasePath(action.payload),
        },
      };
    case 'API_REQ_ERROR':
      return {
        ...state,
      };
    default:
      return state;
  }
};

function generateImgBasePath(payload) {
  let { poster_sizes } = payload;
  let target = 'w342';
  let fallback = 'w500';
  let baseUrl = payload.base_url;
  let imageWidth = poster_sizes.includes(target) ? target : fallback;
  return `${baseUrl}${imageWidth}`;
}

function rejectNoImgPath(movie) {
  return movie.poster_path !== null;
}

export default movieList;
