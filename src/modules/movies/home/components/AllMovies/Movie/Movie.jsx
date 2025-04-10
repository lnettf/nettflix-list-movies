import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import { Container, Info } from "./Movie.styles";
export const Movie = ({ data: movie }) => {
  const { title, synopsis, genre, year, director, id } = movie;

  return (
    <Container to={`/movies/${id}`} style={{ width: "100%" }}>
      <Card sx={{ width: "100%" }}>
        <CardContent sx={{ width: "100%" }}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={3}>
              <Box
                component="img"
                src="https://placehold.co/120x120"
                alt={`${title} cover`}
                sx={{
                  width: "100%",
                  maxWidth: 120,
                  borderRadius: 1,
                  objectFit: "cover",
                }}
              />
            </Grid>

            <Grid item xs={12} sm={9}>
              <Info>
                <Typography
                  variant="h5"
                  component="h2"
                  color="primary"
                  gutterBottom
                >
                  {title}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  {year}
                </Typography>

                <Typography variant="body2" paragraph>
                  {synopsis}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <strong>Género:</strong> {genre}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  <strong>Director:</strong> {director}
                </Typography>
              </Info>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
