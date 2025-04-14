import { useMovie } from "../../hooks/useMovie";
import { Container, Image, Info, Text, Title } from "./MovieCard.styles";
import { Box, Typography, Chip, CircularProgress, Alert } from "@mui/material";

export const MovieCard = ({ id }) => {
  const { movie, isLoading, error } = useMovie(id);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (isLoading) {
    return (
      <Box mt={4} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  const { title, director, synopsis, year, country, genre } = movie;

  return (
    <Container>
      <Image src="https://placehold.co/260x260" alt={`Poster de ${title}`} />

      <Info>
        <Title>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
        </Title>

        <Text>
          <Typography variant="body1" paragraph>
            {synopsis}
          </Typography>
        </Text>

        <Typography variant="subtitle2" color="text.secondary">
          Dirigida por {director}
        </Typography>

        <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
          <Chip label={`🎬 ${year}`} />
          <Chip label={`🌆 ${country}`} />
          <Chip label={`#${genre}`} />
        </Box>
      </Info>
    </Container>
  );
};
