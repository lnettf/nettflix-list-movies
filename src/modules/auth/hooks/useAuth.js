const KEY = "token";
export const useAuth = () => {
  const saveToken = (token) => {
    localStorage.setItem(KEY, token);
  };

  const clearToken = () => {
    localStorage.removeItem(KEY);
  };

  const getToken = () => {
    return localStorage.getItem(KEY);
  };

  return { saveToken, clearToken, getToken };
};
