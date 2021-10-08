import axios from 'axios';

const API_KEY = '43599aecc4a107996f3426684f8b9f50';
const BASE_URL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/account?api_key=<<api_key>>

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    const trendingMovies = data.results;

    return trendingMovies;
  } catch (error) {
    console.error(error);
  }
};
console.log(fetchTrendingMovies());

// const fetchMovieBySearch = searchQuery => {
//   try {
//     const { data } = await axios.get(
//       `${}search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage}&language=en-US`,
//     );

//     const results = data.results;

//     return results;
//   } catch (error) {
//     console.error('Smth wrong with fetch movie search in api', error);
//   }
// };
