import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movie);
  if (!moviesList) return;
  return (
    <div className="bg-black">
      <div className="-mt-60 z-20 relative pl-5">
        <MovieList
          title={"Now Playing"}
          movies={moviesList?.nowPlayingMovies}
        />
        <MovieList title={"Trending"} movies={moviesList?.nowPlayingMovies} />
        <MovieList title={"Drama"} movies={moviesList?.nowPlayingMovies} />
        <MovieList title={"TV Series"} movies={moviesList?.nowPlayingMovies} />
        <MovieList title={"Movies"} movies={moviesList?.nowPlayingMovies} />
        <MovieList title={"Comedy"} movies={moviesList?.nowPlayingMovies} />
        <MovieList title={"Popoular"} movies={moviesList?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
