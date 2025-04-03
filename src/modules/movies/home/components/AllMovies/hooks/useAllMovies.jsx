import axios from "axios";
import { useEffect, useState } from "react";

export const useAllMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const get = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/movies`
      );
      setMovies(response.data.slice(0, 100));
    } catch (error) {
      setError(error);
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
    movies,
    get,
  };
};
