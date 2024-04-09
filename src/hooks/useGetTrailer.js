import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailorVideo } from "../Utils/movieSlice";
import { useEffect } from "react";

const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movie.trailerVideo);

  const getMovieVidoes = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData[0];

    dispatch(addTrailorVideo(trailer)); //Dispatchig the action to add key
  };
  useEffect(() => {
    !trailerVideo && getMovieVidoes();
  }, []);
};

export default useGetTrailer;
