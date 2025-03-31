import { useState } from "react";
import { Links } from "react-router";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const DEFAULT_FORM = {
  username: "",
  password: "",
};
export const Login = () => {
  const [form, setForm] = useState(DEFAULT_FORM);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn({
      form,
    });
  };

  return (
    <>
      <form>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
      <div>
        <p>¿Eres nuevo?</p>
        <Link to="/register">Registrate</Link>
      </div>
    </>
  );
};
