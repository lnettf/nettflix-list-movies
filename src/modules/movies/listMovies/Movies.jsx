import { Allmovies } from "./components/allMovies/AllMovies";
import { Popular } from "./components/Popular/Popular";
import { Box, Typography, Divider } from "@mui/material";

export const Movies = () => {
  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Películas
      </Typography>

      <Box mb={4}>
        <Popular />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box>
        <Allmovies />
      </Box>
    </Box>
  );
};
