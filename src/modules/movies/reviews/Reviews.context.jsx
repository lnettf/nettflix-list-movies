import { createContext } from "react";
import { useReviews } from "./hook/useReviews";

export const ReviewsContext = createContext({
  movieId: null,
  reviews: [],
  isLoadingFetching: false,
  errorFetching: null,
  updateReviews: () => {},
});

export function ReviewsProvider({ children, id }) {
  const {
    reviews,
    isLoading: isLoadingFetching,
    error: errorFetching,
    fetchReviews,
  } = useReviews(id);

  const value = {
    movieId: id,
    reviews,
    isLoadingFetching,
    errorFetching,
    updateReviews: fetchReviews,
  };

  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  );
}
