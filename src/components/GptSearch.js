import { BACKGROUND_URL } from "../Utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-auto"
          alt="background"
          src={BACKGROUND_URL}
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
