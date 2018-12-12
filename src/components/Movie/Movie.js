import React from 'react';
import {
  Image,
  Container,
} from './Movie.style';

const Movie = props =>  (
  <Container>
    <Image src={`${props.config.imgBasePath}${props.movie.poster_path}`} />
  </Container>
)

export default Movie;
