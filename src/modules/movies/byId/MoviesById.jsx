import { useParams } from "react-router";
import { useMovie } from "./hooks/useMovie";
import { GoBack } from "./components/GoBack";
import { MovieCard } from "./components/MovieCard";
import { Reviews } from "../reviews/Reviews";

export const MoviesById = () => {
  const { id } = useParams();

  return (
    <>
      <GoBack />
      <MovieCard id={id} />
      <Reviews id={id} />
    </>
  );
};
