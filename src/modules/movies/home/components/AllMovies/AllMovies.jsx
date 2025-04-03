import { useEffect } from "react";
import { useAllMovies } from "./hooks/useAllMovies";
import { Movie } from "./Movie/movie";

const FIVE_MINUTES = 300_000;
export const Allmovies = () => {
  const { movies, isLoading, error, get } = useAllMovies();

  useEffect(() => {
    const interval = setInterval(() => {
      get();
    }, FIVE_MINUTES);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (error) {
    return <h1>Hay un error</h1>;
  }

  if (isLoading) {
    return <h1>Cargando....</h1>;
  }

  return (
    <>
      <h2>todas las peliculas</h2>

      {movies.map((movie) => {
        return <Movie data={movie}></Movie>;
      })}
    </>
  );
};
