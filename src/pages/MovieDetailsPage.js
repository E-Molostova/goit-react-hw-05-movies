import React from 'react';
import MovieDetails from '../Components/movieDetails/MovieDetails';
import Cast from '../Components/cast/Cast';
import Reviews from '../Components/reviews/Reviews';
import { Route } from 'react-router-dom';

const MovieDetailsPage = () => {
  return (
    <>
      <MovieDetails />
      <Route path={'/movie/:movieId/cast'}>
        <Cast />
      </Route>
      <Route path={'/movie/:movieId/reviews'}>
        <Reviews />
      </Route>
    </>
  );
};

export default MovieDetailsPage;
