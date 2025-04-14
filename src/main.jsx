import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router";
import { Login } from "./modules/auth/login/Login";
import { Register } from "./modules/auth/register/Register";
import { Movies } from "./modules/movies/listMovies/movies";
import { Route } from "react-router";
import { MoviesById } from "./modules/movies/byId/MoviesById";
import axios from "axios";
import { getToken } from "./modules/auth/hooks/useAuth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesById />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

axios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers["Authorization"] = "Bearer " + getToken();
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
