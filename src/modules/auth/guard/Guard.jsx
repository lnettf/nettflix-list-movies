import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const Guard = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
