import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const DEFAULT_FORM = {
  username: "",
  password: "",
};
export const useLoginUser = () => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const { saveToken } = useAuth();

  const login = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        form
      );
      saveToken(response.data.token);
      Swal.fire({
        title: "Inicio de sesion okey!",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      Swal.fire({
        title: "Inicio de sesion con error!",
        icon: "error",
        draggable: true,
      });
      console.error({ error });
    }
  };

  const handleChange = (event) => {
    /**
     * {
     *    [event.target.name]: event.target.value,
     *    username: "luis"
     * }
     */
    setForm((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  };

  return {
    handleChange,
    form,
    login,
  };
};
