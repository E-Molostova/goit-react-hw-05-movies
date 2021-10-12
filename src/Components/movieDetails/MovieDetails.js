import React, { useState, useEffect } from 'react';
import {
  NavLink,
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
  Redirect,
} from 'react-router-dom';
import { additionalRoutes } from '../../routes/additionalRoutes';
import * as movieAPI from '../../services/api-service';
import GoBackButton from '../goBackButton/GoBackButton';
import { AdditionalContainer, MovieDetailsContainer } from './MovieDetailsStyled';

const MovieDetails = () => {
  const match = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    movieAPI
      .fetchMovieById(movieId)
      .then(setMovie)
      .catch(error => history.push({ pathname: '/not-found' }));
  }, [movieId]);

  const releaseYear = new Date(movie?.release_date).getFullYear();

  const onGoback = () => {
    history.push(location.state.from);
  };

  return (
    <>
      {movie ? (
        <>
          <div>
            <GoBackButton onGoBack={onGoback} />
          </div>
          <MovieDetailsContainer>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              width="300"
              className="moviePoster"
            />
            <div className="movieDescr">
              {!!movie.title && (
                <h2 className="movieTitle">
                  {movie.title} ({releaseYear})
                </h2>
              )}
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
          <AdditionalContainer>
            <h3 className="addTitle">Additional information</h3>

            {additionalRoutes.map(route => (
              <NavLink
                className="addLink"
                exact={route.exact}
                to={{
                  pathname: `${match.url}${route.path}`,
                  state: { from: location.state?.from || '/' },
                }}
              >
                {route.name}
              </NavLink>
            ))}
          </AdditionalContainer>
        </>
      ) : (
        <Redirect to={'/not-found'} />
      )}
    </>
  );
};

export default MovieDetails;
