import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as movieAPI from '../../services/api-service';
import MovieList from '../movieList/MovieList';
import { MovieListContainer } from '../movieList/MovieListStyled';
import { FilterContainer } from './MoviesFilterStyled';
import queryString from 'query-string';

const MoviesFilter = () => {
  const [search, setSearch] = useState('');
  const [movieForSearch, setMovieForSearch] = useState([]);
  const { push, location } = useHistory();

  useEffect(() => {
    const { q } = queryString.parse(location.search);
    console.log(q);
    q &&
      movieAPI
        .fetchMovieBySearch(q)
        .then(setMovieForSearch)
        .catch(error => console.log(error));
  }, []);

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
      push({ ...location, search: `?q=${search}` });
      movieAPI
        .fetchMovieBySearch(search)
        .then(setMovieForSearch)
        .catch(error => console.log(error));
    }
  };

  // console.log(movieAPI.fetchMovieBySearch(search).then(setMovieForSearch));

  return (
    <>
      <FilterContainer>
        <form onSubmit={handleSubmit}>
          <input
            className="searchForm"
            type="text"
            name="search"
            value={search}
            onChange={handleSearchInput}
            placeholder="Search movies"
          />
          <button className="buttonForm" type="submit" title="Go">
            <span>Search</span>
          </button>
        </form>
      </FilterContainer>
      {movieForSearch.length > 0 && (
        <MovieListContainer>
          <MovieList movies={movieForSearch} />
        </MovieListContainer>
      )}
    </>
  );
};

export default MoviesFilter;
