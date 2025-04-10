import { Button, TextField, Box, Typography } from "@mui/material";
import { useRegisterUser } from "./hooks/useRegisterUser";

export const Register = () => {
  const { handleChange, form, saveUser } = useRegisterUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await saveUser();
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
        Crear cuenta
      </Typography>

      <TextField
        label="Nombre"
        variant="outlined"
        name="firstName"
        onChange={handleChange}
        value={form.firstName}
        fullWidth
      />

      <TextField
        label="Apellido"
        variant="outlined"
        name="lastName"
        onChange={handleChange}
        value={form.lastName}
        fullWidth
      />

      <TextField
        label="Nombre de usuario"
        variant="outlined"
        name="username"
        onChange={handleChange}
        value={form.username}
        fullWidth
      />

      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        name="password"
        onChange={handleChange}
        value={form.password}
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Registrarse
      </Button>
    </Box>
  );
};
