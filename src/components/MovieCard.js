import { IMG_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 pr-4">
      <img alt="movie-poster" src={IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
