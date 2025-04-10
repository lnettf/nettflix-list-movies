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
export const useRegisterUser = () => {
  const [form, setForm] = useState(DEFAULT_FORM);

  const saveUser = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, form);

      Swal.fire({
        title: "Registro okey!",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      console.error({ error });
      Swal.fire({
        title: "Regsitro con error!",
        icon: "error",
        draggable: true,
      });
    }
  };

  const handleChange = (event) => {
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
    saveUser,
  };
};
