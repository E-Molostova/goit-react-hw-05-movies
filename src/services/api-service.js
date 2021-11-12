import axios from 'axios';

const API_KEY = '43599aecc4a107996f3426684f8b9f50';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`,
    );
    const trendingMovies = data.results;

    return trendingMovies;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieById = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCast = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    );
    return data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const fetchReviews = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );

    return data.results;
  } catch (error) {
    console.error(error);
  }
};
// console.log(fetchMovieById());

export const fetchMovieBySearch = async (search, page = 1) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}&page=${page}&language=en-US`,
    );

    const results = data.results;

    return results;
  } catch (error) {
    console.error(error);
  }
};
