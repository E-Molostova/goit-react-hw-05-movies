import React, { useState, useEffect } from 'react';
import * as movieAPI from '../../services/api-service';
import MovieList from '../movieList/MovieList';
import { HomeContainer } from './HomeStyled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieAPI.fetchTrendingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);
  return (
    <>
      <h2 className="movieListTitle">Trending today</h2>
      <HomeContainer>
        <MovieList movies={movies} />
      </HomeContainer>
    </>
  );
};

export default Home;
