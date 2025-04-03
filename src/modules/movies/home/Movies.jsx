import { useAuth } from "../../auth/hooks/useAuth";
import { Allmovies } from "./components/allMovies/AllMovies";
import { Popular } from "./components/Popular/Popular";

export const Movies = () => {
  const { getToken } = useAuth();

  console.log({
    token: getToken(),
  });

  return (
    <>
      <h1>Movies</h1>
      <Popular />
      <Allmovies />
    </>
  );
};
