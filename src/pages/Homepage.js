import { useState, useEffect } from 'react';
import queryString from 'query-string';
import * as movieAPI from '../services/api-service';
import MovieList from '../Components/movieList/MovieList';
import s from './Styles.module.css';
import { useHistory, useLocation } from 'react-router';
import Pagination from '../Components/Pagination/Pagination';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const { page } = queryString.parse(location.search);

  useEffect(() => {
    movieAPI.fetchTrendingMovies().then(movies => {
      setMovies(movies);
      history.push({ ...location, search: '?page=1' });
    });
  }, []);

  useEffect(() => {
    movieAPI.fetchTrendingMovies(page).then(movies => {
      setMovies(movies);
    });
  }, [page]);

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <MovieList movies={movies} />
      <Pagination />
    </>
  );
};

export default Homepage;
