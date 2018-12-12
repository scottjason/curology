import React from 'react';
import Movie from '../Movie/Movie';
import {
  Grid,
  Next,
  Container,
} from './MovieList.style';

const MovieList = props =>  (
  <Container>
    <Grid>
      {!props.isPopular &&
        props.movies.length && 
        <Next onClick={props.onClickNext} >NEXT</Next>
      }
      {props.movies.map(movie => {
        return(
          <Movie
            key={movie.id}
            movie={movie}
            config={props.config}
          />
        )
      })}
    </Grid>
  </Container>
)

export default MovieList;
