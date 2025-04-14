import axios from "axios";
import { useContext, useState } from "react";
import { ReviewsContext } from "../Reviews.context";

export const useSaveReview = () => {
  const { movieId: id, updateReviews } = useContext(ReviewsContext);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const saveReview = async ({ review, isPublic, score }) => {
    setIsLoading(true);
    setError(null);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/movies/${id}/reviews`, {
        content: review,
        isPublic,
        score,
      });
      updateReviews();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    saveReview,
    isLoading,
    error,
  };
};
