import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import {
  useGetFilteredMoviesQuery,
  useGetPopularMoviesQuery,
  useGetSearchMoviesQuery,
} from "../../features/movies/movieApiSlice";
import { Movie } from "../../types/movie";
import SingleMovieCard from "./SingleMovieCard";

interface MovieListProps {}

const MovieList: React.FC<MovieListProps> = () => {
  const { sort, search } = useAppSelector((state) => state.filter);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState(search);
  const [filterOptions, setFilterOptions] = useState(sort);
  const { data: movies, isLoading, isError } = useGetPopularMoviesQuery(page);
  const { data: searchedMovies } = useGetSearchMoviesQuery(searchText);
  const { data: filteredMovies } = useGetFilteredMoviesQuery(filterOptions);
  const totalPages = movies?.total_pages || 1;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  useEffect(() => {
    setFilterOptions(sort);
  }, [sort]);

  let content = null;

  if (isLoading)
    content = (
      <div className="flex flex-wrap justify-around">
        <Skeleton variant="rectangular" width={300} height={160} />
        <Skeleton variant="rectangular" width={300} height={160} />
        <Skeleton variant="rectangular" width={300} height={160} />
        <Skeleton variant="rectangular" width={300} height={160} />
      </div>
    );

  if (!isLoading && isError)
    content = <Snackbar message="There has been an error fetching movies." />;

  if (!isError && !isLoading && movies?.length === 0) {
    content = <Snackbar message="No Movies Found" />;
  }

  if (!isLoading && !isError && movies?.results?.length > 0) {
    content = (
      <div className="flex flex-wrap justify-around p-4">
        {movies.results.map((movie: Movie) => (
          <SingleMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }

  if (sort?.length > 0) {
    content = (
      <div className="flex flex-wrap justify-around p-4">
        {filteredMovies.results.map((movie: Movie) => (
          <SingleMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }

  if (search?.length > 0) {
    content = (
      <div className="flex flex-wrap justify-around p-4">
        {searchedMovies.results.map((movie: Movie) => (
          <SingleMovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {content}
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default MovieList;
