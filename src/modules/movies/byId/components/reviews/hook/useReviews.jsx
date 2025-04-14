import axios from "axios";
import { useEffect, useState } from "react";

export const useReviews = (id) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReviews = async () => {
    setIsLoading(true);
    setError(null);
    setReviews([]);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/movies/${id}/reviews`
      );

      setReviews(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Llama a la función al montar el componente
  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    fetchReviews,
    isLoading,
    error,
  };
};
