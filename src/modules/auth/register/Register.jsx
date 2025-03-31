import { useRegisterUser } from "./hooks/useRegisterUser";

export const Register = () => {
  const { handleChange, form, saveUser } = useRegisterUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await saveUser();
  };

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={form.username}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
};
