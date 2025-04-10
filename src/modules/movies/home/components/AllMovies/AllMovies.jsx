import { useEffect } from "react";
import { useAllMovies } from "./hooks/useAllMovies";
import { Movie } from "./Movie/movie";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";

const FIVE_MINUTES = 300_000;

export const Allmovies = () => {
  const { movies, isLoading, error, get } = useAllMovies();

  useEffect(() => {
    const interval = setInterval(() => {
      get();
    }, FIVE_MINUTES);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <Box mt={5} textAlign="center">
        <Alert severity="error">
          Ocurrió un error al cargar las películas.
        </Alert>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box mt={5} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Todas las películas
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        {movies.map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      </Box>
    </Box>
  );
};
