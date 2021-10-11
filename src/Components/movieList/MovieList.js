import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {!!movies.length &&
        movies.map(movie => (
          <li className="movieItem">
            <Link to={{ pathname: `/movie/${movie.id}`, state: { from: location } }}>
              {movie.title}
            </Link>
          </li>
        ))}
    </>
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
