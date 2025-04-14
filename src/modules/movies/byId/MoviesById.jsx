import { useParams } from "react-router";
import { Reviews } from "./components/reviews/Reviews";
import { Container, Box, Divider } from "@mui/material";
import { GoBack } from "./components/goBack/GoBack";
import { MovieCard } from "./components/movieCard/MovieCard";

export const MoviesById = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <GoBack />

      <Box mt={3} mb={4}>
        <MovieCard id={id} />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Reviews id={id} />
      </Box>
    </Container>
  );
};
