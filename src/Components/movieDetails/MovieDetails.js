import React, { useState, useEffect } from 'react';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';
import { additionalRoutes } from '../../routes/additionalRoutes';
import * as movieAPI from '../../services/api-service';
import Cast from '../cast/Cast';
import Reviews from '../reviews/Reviews';
import { MovieDetailsContainer } from './MovieDetailsStyled';

const MovieDetails = () => {
  const match = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    movieAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  // console.log(movieId);
  // console.log(movie); //undefined ??
  // console.log(setMovie);

  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <>
      <MovieDetailsContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title}
          width="300"
          className="moviePoster"
        />
        <div className="movieDescr">
          <h2 className="movieTitle">
            {movie.title} ({releaseYear})
          </h2>
          <p>User score: {movie.vote_average}</p>
          <p className="overviewTitle">Overview</p>
          <p className="overviewText">{movie.overview}</p>
          <p className="genresTitle">
            Genres:{' '}
            {movie.genres &&
              movie.genres.map(genre => <span className="movieGenres">{genre.name}</span>)}{' '}
          </p>
        </div>
      </MovieDetailsContainer>
      <div>
        <h3>Additional information</h3>

        {/* <Cast />

        <Reviews /> */}

        {additionalRoutes.map(route => (
          <NavLink exact={route.exact} to={`${match.url}${route.path}`}>
            {route.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default MovieDetails;
