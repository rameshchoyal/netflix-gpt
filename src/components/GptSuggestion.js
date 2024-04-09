import { useSelector } from "react-redux";
import SuggestionList from "./SuggestionList";

const GptSuggestion = () => {
  const { movieResults, movieName } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-75">
      <div className="flex flex-wrap">
        {movieName.map((movieName, index) => (
          <SuggestionList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestion;
