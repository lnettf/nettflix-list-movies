import axios from "axios";
import { useState } from "react";

export const useSaveReview = (id) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const saveReview = async ({ review, isPublic, score }) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/movies/${id}/reviews`,
        {
          content: review,
          isPublic,
          score,
        },
        {
          headers: {
            //
          },
        }
      );
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
