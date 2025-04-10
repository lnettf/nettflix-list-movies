const KEY = "token";
export const useAuth = () => {
  const saveToken = (token) => {
    localStorage.setItem(KEY, token);
  };

  const clearToken = () => {
    localStorage.removeItem(KEY);
  };

  return { saveToken, clearToken };
};

export const getToken = () => {
  return localStorage.getItem(KEY);
};
