import { useContext } from "react";
import { ReviewsContext, ReviewsProvider } from "./Reviews.context";
import { ReviewsContainer } from "./Reviews.styles";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";
import { CreateReview } from "./CreateReview";

export const Reviews = ({ id }) => {
  return (
    <ReviewsProvider id={id}>
      <Content />
    </ReviewsProvider>
  );
};

const Content = () => {
  const { reviews, isLoadingFetching, errorFetching } =
    useContext(ReviewsContext);

  if (isLoadingFetching) {
    return (
      <Box mt={4} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (errorFetching) {
    return (
      <Box mt={4} textAlign="center">
        <Alert severity="error">Ocurrió un error al cargar las reseñas.</Alert>
      </Box>
    );
  }

  return (
    <ReviewsContainer>
      <Typography variant="h5" gutterBottom>
        Reseñas
      </Typography>

      {reviews.length === 0 ? (
        <Typography variant="body1" color="text.secondary" mt={2}>
          No hay reseñas todavía.
        </Typography>
      ) : (
        <Stack spacing={2} mb={3}>
          {reviews.map((review) => (
            <Paper
              key={review.id}
              elevation={1}
              sx={{
                p: 2,
                borderRadius: 2,
              }}
            >
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Avatar>
                  {review.user.firstName?.[0]?.toUpperCase() || "U"}
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {review.user.firstName || "Usuario anónimo"}
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    {review.content}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>
      )}

      <CreateReview />
    </ReviewsContainer>
  );
};
