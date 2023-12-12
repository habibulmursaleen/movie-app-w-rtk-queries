import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApiSlice = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: (page) =>
        `/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`,
      keepUnusedDataFor: 600,
    }),
    getMovieById: builder.query({
      query: (movieId) =>
        `/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      keepUnusedDataFor: 600,
    }),
    getSearchMovies: builder.query({
      query: (searchQuery) =>
        `/search/movie?query=${searchQuery}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      keepUnusedDataFor: 600,
    }),
    getFilteredMovies: builder.query({
      query: (param) => {
        let queryString = `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

        switch (param) {
          case "lowToHigh":
            queryString += "&sort_by=vote_average.asc";
            break;

          case "highToLow":
            queryString += "&sort_by=vote_average.desc";
            break;

          case "popularity":
            queryString += "&sort_by=popularity.desc";
            break;

          case "newToOld":
            queryString += "&sort_by=release_date.desc";
            break;

          case "oldToNew":
            queryString += "&sort_by=release_date.asc";
            break;

          default:
            break;
        }

        return queryString;
      },
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetMovieByIdQuery,
  useGetSearchMoviesQuery,
  useGetFilteredMoviesQuery,
} = movieApiSlice;
