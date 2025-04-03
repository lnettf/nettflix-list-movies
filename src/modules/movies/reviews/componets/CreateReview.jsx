import { useState } from "react";
import { Button, CreateReviewContainer, Input } from "./CreateReview.styles";
import { useSaveReview } from "../hook/useSaveReview";

export const CreateReview = ({ id }) => {
  const { saveReview, isLoading, error } = useSaveReview(id);
  const [review, setReview] = useState("");

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSave = () => {
    saveReview(review);
  };

  return (
    <>
      <CreateReviewContainer>
        <Input type="text" onChange={handleChange} value={review} />

        <Button disabled={review.length < 10} onClick={handleSave}>
          ➡
        </Button>
      </CreateReviewContainer>
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error</p>}
    </>
  );
};
