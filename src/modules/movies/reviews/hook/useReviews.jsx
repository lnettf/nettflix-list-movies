import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ReviewsContext } from "../Reviews.context";

export const useReviews = (id) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReviews = async () => {
    setIsLoading(true);
    setError(null);
    setReviews(null);
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
