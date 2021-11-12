import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieListContainer } from './MovieListStyled';
import noPhoto from '../../images/placeholder.png';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieListContainer>
      {!!movies.length &&
        movies.map(({ id, poster_path, title }) => (
          <li className="movieItem" key={id}>
            <Link
              to={{ pathname: `/movie/${id}`, state: { from: location } }}
              className="movieTitle"
            >
              <img
                src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noPhoto}
                alt={title}
                className="movieImg"
              />
              {title}
            </Link>
          </li>
        ))}
    </MovieListContainer>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default MovieList;
