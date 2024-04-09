import { IMG_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-32 md:w-44 pr-4">
      <img alt="movie-poster" src={IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
