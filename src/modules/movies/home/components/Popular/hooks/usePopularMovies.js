import { useEffect, useState } from "react";
import axios from "axios";

export const usePopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPopular = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/movies/popular?limit=10`
      );
      setMovies(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return { movies, loading, error };
};
