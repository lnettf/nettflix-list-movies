import { useAuth } from "../../auth/hooks/useAuth";
import { Popular } from "./components/Popular";

export const Movies = () => {
  const { getToken } = useAuth();

  console.log({
    token: getToken(),
  });

  return (
    <>
      <h1>Movies</h1>
      <Popular />
    </>
  );
};
