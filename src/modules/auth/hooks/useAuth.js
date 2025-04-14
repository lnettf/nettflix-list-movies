export const useAuth = () => {
  // Verifica si hay token guardado
  const isAuthenticated = getToken() !== null;

  return { saveToken, clearToken, isAuthenticated };
};

const KEY = "token";

const saveToken = (token) => {
  localStorage.setItem(KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(KEY);
};

export const getToken = () => {
  return localStorage.getItem(KEY);
};
