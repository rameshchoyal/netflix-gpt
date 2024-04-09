import { IMG_URL } from "../Utils/constants";

const SuggestionList = ({ title, movies }) => {
  if (!movies || !movies.length) return null;
  const imgPath = movies[0].poster_path;
  if (!imgPath) return null;
  return (
    <div className="px-6 mb-4">
      <h1 className="text-sm  md:text-md py-2 text-white ">{title}</h1>
      <img
        className="w-32  md:w-44 pr-4"
        alt="movie-poster"
        src={IMG_URL + movies[0].poster_path}
      />
    </div>
  );
};

export default SuggestionList;
