import axios from "axios";
import { getToken } from "../modules/auth/hooks/useAuth";

axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirige a login
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
