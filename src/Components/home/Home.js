import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../../services/api-service';
import { HomeContainer } from './HomeStyled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieAPI.fetchTrendingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);
  return (
    <HomeContainer>
      <h2 className="movieListTitle">Trending today</h2>
      {!!movies.length &&
        movies.map(movie => (
          <li className="movieItem">
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </HomeContainer>
  );
};

export default Home;
