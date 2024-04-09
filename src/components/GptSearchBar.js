import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import lang from "../Utils/languageConstants";
import { useRef, useState } from "react";
import openai from "../Utils/openai";
import { addGptMovieResult } from "../Utils/gptSlice";
import Loading from "./Loading";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const searchMoviesTMDB = async (movie, year) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1&year=" +
        year,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    setIsLoading(true);
    const gptQuery =
      "Act as Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 10 movies with release dat , comma separated and relasea date with : this like the example result given ahead of 5 movies. Examples Result: URI : 2019,3 Idiots : 2009,Interstellar : 2014,Sholay : 1975,Race Gurram : 2014 ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      //Error Handling
    }

    const gptMoives = gptResults.choices?.[0]?.message.content.split(",");

    const promiseArray = gptMoives.map((movie) => {
      movie = movie.split(":");
      return searchMoviesTMDB(movie[0], movie[1]);
    });

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieName: gptMoives, movieResults: tmdbResults })
    );
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Loading />}
      <div className="pt-[40%] md:pt-[10%]">
        <form
          className="bg-black rounded-md  w-full md:w-1/2 m-auto grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            className="p-4 m-4 col-span-9  text-sm md:text-xl "
            type="text"
            placeholder={lang[langkey].placeholder}
          />
          <button
            className="px-4 py-2 bg-red-700 m-4 text-white rounded-lg col-span-3"
            onClick={handleGptSearchClick}
          >
            {lang[langkey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
