import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GradeIcon from "@mui/icons-material/Grade";
import { Link } from "react-router-dom";
import notAvailable from "../../assets/not-available.jpg";
import { Movie } from "../../types/movie";

interface SingleMovieProps {
  movie: Movie;
}

const SingleMovieCard: React.FC<SingleMovieProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="flex my-2 bg-[#4a566c] rounded-lg p-2 relative  hover:bg-white text-slate-400 transition">
        <img
          className="rounded-lg  h-64 w-48 object-cover"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
              : notAvailable
          }
          alt={movie.title}
        />
        <div className="flex flex-col ">
          <label className="text-left ml-4 text-gray-400 text-lg font-bold my-2 w-32  ">
            {movie.title}
          </label>

          <div className="flex flex-col items-center mt-auto ">
            <div className="flex flex-row items-center mb-4">
              <div className="flex flex-col items-center mr-2">
                <span className="bg-yellow-500 text-white font-bold py-1 px-2 rounded-full flex items-center">
                  <GradeIcon className="h-1 w-1 mr-0.5" />
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center mr-2  mb-4">
              <span className="rounded-full shadow-md p-1.5 text-slate-400 text-xs my-1">
                <CalendarMonthIcon className="h-4 w-4 mr-0.5" />
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleMovieCard;
