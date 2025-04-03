import { CreateReview } from "./componets/CreateReview";
import { useReviews } from "./hook/useReviews";
import { ReviewsContainer } from "./Reviews.styles";

export const Reviews = ({ id }) => {
  console.warn();
  const { reviews, isLoading, error } = useReviews(id);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>error...</h1>;
  }

  return (
    <ReviewsContainer>
      {reviews.length === 0 && <h1>No hay reviews...</h1>}
      {reviews.map((review, index) => {
        return <>review #{index}</>;
      })}
      <CreateReview />
    </ReviewsContainer>
  );
};
