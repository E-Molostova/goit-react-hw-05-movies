import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import * as movieAPI from '../services/api-service';
import MovieList from '../Components/movieList/MovieList';
import s from './Styles.module.css';
import Pagination from '../Components/Pagination/Pagination';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const [movieForSearch, setMovieForSearch] = useState([]);
  const [error, setError] = useState('');
  const { push, location } = useHistory();

  const { page } = queryString.parse(location.search);
  const { q } = queryString.parse(location.search);

  useEffect(() => {
    q &&
      movieAPI
        .fetchMovieBySearch(q, page)
        .then(setMovieForSearch)
        .catch(error => console.log(error));
  }, [q, page]);

  useEffect(() => {
    if (location.search === '') {
      setMovieForSearch([]);
    }
  }, [location]);

  const handleSearchInput = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search) {
      push({ ...location, search: `?q=${search}&page=1` });
      movieAPI
        .fetchMovieBySearch(search, page)
        .then(movieForSearch => {
          if (movieForSearch.length === 0) {
            setError(`Error! Movie ${search} is not found! Please enter the correct movie title!`);
            return;
          }
          setMovieForSearch(movieForSearch);
          setError('');
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <>
      <div className={q ? s.divForm : s.formFooter}>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            className={s.input}
            type="text"
            name="search"
            value={search}
            onChange={handleSearchInput}
            placeholder="Search movies"
          />
          <button className={s.btn} type="submit" title="Go">
            <span>Search</span>
          </button>
        </form>
      </div>
      {error ? (
        <p className={s.error}>{error}</p>
      ) : (
        <>
          <MovieList movies={movieForSearch} />
        </>
      )}

      {!!movieForSearch.length > 0 && <Pagination />}
    </>
  );
};

export default MoviesPage;
