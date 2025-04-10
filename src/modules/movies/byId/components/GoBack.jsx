import { Link as RouterLink } from "react-router";
import { Link, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const GoBack = () => {
  return (
    <Link
      component={RouterLink}
      to="/movies"
      underline="none"
      color="text.primary"
      display="flex"
      alignItems="center"
      sx={{ mb: 2 }}
    >
      <ArrowBackIcon sx={{ mr: 1 }} />
      <Typography variant="body1">Volver</Typography>
    </Link>
  );
};
