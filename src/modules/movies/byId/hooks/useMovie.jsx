import axios from "axios";
import { useEffect, useState } from "react";

export const useMovie = (movieId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});

  const get = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/movies/${movieId}`
      );
      setMovie(response.data);
    } catch (error) {
      if (error.status === 404) {
        setError("No encontrado");
      } else {
        setError("Desconocido");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return {
    isLoading,
    error,
    movie,
  };
};
