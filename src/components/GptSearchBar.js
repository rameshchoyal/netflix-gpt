import { useSelector } from "react-redux";
import { BACKGROUND_URL } from "../Utils/constants";
import lang from "../Utils/languageConstants";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.language);

  return (
    <div>
      <img className="absolute -z-10" alt="background" src={BACKGROUND_URL} />
      <div className="pt-[10%]">
        <form className="bg-black rounded-md   w-1/2 m-auto grid grid-cols-12">
          <input
            className="p-4 m-4 col-span-9"
            type="text"
            placeholder={lang[langkey].placeholder}
          />
          <button className="px-4 py-2 bg-red-700 m-4 text-white rounded-lg col-span-3">
            {lang[langkey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
