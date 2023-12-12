import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import notAvailable from "../../assets/not-available.jpg";
import { useGetMovieByIdQuery } from "../../features/movies/movieApiSlice";
import Navbar from "../Navbar";

const SingleMovieDetails = () => {
  const { movieId } = useParams();

  const { data: movie, isLoading, isError } = useGetMovieByIdQuery(movieId);
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

  if (!isError && !isLoading) {
    content = <Snackbar message="No Movies Found" />;
  }

  if (!isLoading && !isError) {
    content = (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col bg-[#39445a] text-white p-10 md:p-30">
          <div className="mt-16">
            <div className="p-4 shadow-md">
              <img
                className="rounded-md"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                    : notAvailable
                }
                alt={movie.title}
              />
            </div>
            <h1 className="mt-4 text-white text-lg font-semibold tracking-tight text-slate-800">
              {movie.title}
            </h1>
            <div className="pb-4 flex items-center space-between gap-4">
              <h2 className="text-white text-md leading-[1.7142857] text-slate-600 w-full">
                Released on {movie.release_date}
              </h2>
            </div>

            <Stack direction="row" spacing={1}>
              <Chip
                label={`Rating: ${movie.vote_average.toFixed(1)}`}
                color="primary"
              />
              <Chip
                label={`Popularity: ${movie.popularity.toFixed(1)}`}
                color="primary"
              />
              <Chip
                label={`Adult: ${movie.adult ? "Yes" : "No"}`}
                color="primary"
              />
              <Chip
                label={`Original Title: ${movie.original_title}`}
                color="primary"
              />
              <Chip
                label={`Language: ${movie.original_language}`}
                color="primary"
              />
              <Chip
                label={`Vote Average: ${movie.vote_average}`}
                color="primary"
              />
              <Chip label={`Vote Count: ${movie.vote_count}`} color="primary" />
            </Stack>

            <div className="mt-4">
              <Divider>Details on the movie</Divider>
            </div>

            <div className="mt-4 p-4 bg-[#4a566c] rounded-md shadow-md">
              <h2 className="text-lg font-semibold text-[#334155] dark:text-slate-400 mb-2">
                Overview
              </h2>
              <p className="text-sm text-[#334155] dark:text-slate-400">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div>{content}</div>;
};

export default SingleMovieDetails;
