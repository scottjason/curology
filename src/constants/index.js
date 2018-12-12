const base = 'https://api.themoviedb.org/3';
const tmdbApiKey = '403ffcb3b4481da342203f94fb6e937e';

export const TMBD_CONFIG_REQ_BASE_PATH = `${base}/configuration?api_key=${tmdbApiKey}`;
export const TMBD_GET_POPULAR_REQ_PATH = `${base}/movie/popular?api_key=${tmdbApiKey}&language=en-US&page=1`;
export const TMDB_MOVIE_REQ_BASE_PATH = `${base}/search/movie?api_key=${tmdbApiKey}&language=en-US&include_adult=false`;
