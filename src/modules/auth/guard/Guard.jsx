import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

// Componente de protección de rutas: solo permite acceso si el usuario está autenticado
export const Guard = ({ children }) => {
  // Verifica si el usuario está autenticado
  const { isAuthenticated } = useAuth();

  console.warn({
    isAuthenticated,
    message: "Guard.jsx: Verificando autenticación del usuario",
  });
  if (!isAuthenticated) {
    // Redirige al login si no está autenticado
    return <Navigate to="/" />;
  }

  // Renderiza el contenido protegido si el usuario está autenticado
  return <h1>{children}</h1>;
};
