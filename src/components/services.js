import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "3e095217d44033ba7c651056f0659dbb";


export default {
    async getMovies() {
      const data = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
      );
      return data;
    },
    async getMovieQuery(query) {
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return data;
    },
    async getMovieDetails(movieId) {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      return data;
    },
    async getMovieCast(movieId) {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      return data;
    },
    async getMovieReviews(movieId) {
      const data = await axios.get(
        `
          https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      return data;
    }
  };
  