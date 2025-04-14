import { useState } from "react";
import { Box, TextField, Button, CircularProgress, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useSaveReview } from "./hook/useSaveReview";

export const CreateReview = () => {
  const { saveReview, isLoading, error } = useSaveReview();
  const [review, setReview] = useState("");

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSave = async () => {
    await saveReview({ review, isPublic: true, score: 9 });
    setReview("");
  };

  const isReviewValid = review.length >= 10;

  return (
    <Box mt={3}>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          fullWidth
          label="Escribe tu reseña..."
          multiline
          minRows={2}
          value={review}
          onChange={handleChange}
          error={!isReviewValid && review.length > 0}
          helperText={
            !isReviewValid && review.length > 0
              ? "Debe tener al menos 10 caracteres"
              : " "
          }
        />

        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          disabled={!isReviewValid || isLoading}
          onClick={handleSave}
        >
          Enviar
        </Button>
      </Box>

      {isLoading && (
        <Box mt={2}>
          <CircularProgress size={24} />
        </Box>
      )}

      {error && (
        <Box mt={2}>
          <Alert severity="error">No se pudo enviar la reseña.</Alert>
        </Box>
      )}
    </Box>
  );
};
