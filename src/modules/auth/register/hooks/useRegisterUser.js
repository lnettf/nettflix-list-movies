import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const DEFAULT_FORM = {
  username: "",
  password: "",
  lastName: "",
  firstName: "",
};
// Hook para gestionar el formulario de registro de usuario
export const useRegisterUser = () => {
  const [form, setForm] = useState(DEFAULT_FORM); // Estado del formulario

  // Envía los datos del formulario al endpoint de registro
  const saveUser = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, form);

      // Muestra mensaje de éxito
      Swal.fire({
        title: "Registro okey!",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      console.error({ error });

      // Muestra mensaje de error
      Swal.fire({
        title: "Regsitro con error!",
        icon: "error",
        draggable: true,
      });
    }
  };

  // Maneja los cambios en los inputs del formulario
  const handleChange = (event) => {
    setForm((form) => ({
      ...form,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    form,
    saveUser,
  };
};
