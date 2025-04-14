import { usePopularMovies } from "./hooks/usePopularMovies";
import { Container, CustomLink } from "./Popular.styles";
import { PopularItem } from "./PopularItem";
import { Typography, CircularProgress, Box, Alert } from "@mui/material";

export const Popular = () => {
  const { movies, loading, error } = usePopularMovies();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={4} textAlign="center">
        <Alert severity="error">
          No se pudieron cargar las películas populares.
        </Alert>
      </Box>
    );
  }

  return (
    <>
      <Typography variant="h5" mb={2}>
        Pelis populares
      </Typography>
      <Container>
        {movies.map((movie) => (
          <CustomLink key={movie.id} to={`/movies/${movie.id}`}>
            <PopularItem title={movie.title} score={movie.averageScore} />
          </CustomLink>
        ))}
      </Container>
    </>
  );
};
