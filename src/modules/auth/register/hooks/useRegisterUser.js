import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const DEFAULT_FORM = {
  username: "",
  password: "",
};
export const useRegisterUser = () => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const { saveToken } = useAuth();

  const saveUser = async () => {
    try {
      //const response = await axios.post(
      //  "https://nettflix.onrender.com/auth/signup",
      //  form
      //);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 sec

      const response = {
        data: {
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDI4NDM4MzQsImV4cCI6MTc3NDM3OTgzNCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.KtNUkK4GOQhMLrGCsDMabDoy6SHAVh6yD4q8CHNrvZk",
        },
      };

      console.log({ response });

      saveToken(response.data.token);
      alert("usuario creado correctamente");
    } catch (error) {
      console.error({ error });
    }
  };

  const handleChange = (event) => {
    // event.target.name -> name del input (password)
    // event.target.value -> valor del input (123456)

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
