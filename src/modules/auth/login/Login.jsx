import {
  TextField,
  Button,
  Box,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router";
import { useLoginUser } from "./hooks/useLoginUser";

export const Login = () => {
  const { handleChange, form, login } = useLoginUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" component="h1" align="center">
        Iniciar Sesión
      </Typography>

      <TextField
        label="Username"
        variant="outlined"
        name="username"
        fullWidth
        value={form.username}
        onChange={handleChange}
      />

      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        fullWidth
        value={form.password}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>

      <Box textAlign="center" mt={2}>
        <Typography variant="body2">
          ¿Eres nuevo?{" "}
          <MuiLink component={Link} to="/register">
            Regístrate
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};
