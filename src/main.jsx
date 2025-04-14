import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Login } from "./modules/auth/login/Login";
import { Register } from "./modules/auth/register/Register";
import { MoviesById } from "./modules/movies/byId/MoviesById";
import { Movies } from "./modules/movies/listMovies/Movies";
import { Guard } from "./modules/auth/guard/Guard";
import "./utils/interceptor";
import { ROUTES } from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />

        <Route
          path={ROUTES.MOVIES}
          element={
            <Guard>
              <Movies />
            </Guard>
          }
        />
        <Route
          path={ROUTES.MOVIE_DETAIL}
          element={
            <Guard>
              <MoviesById />
            </Guard>
          }
        />

        <Route
          path={ROUTES.NOT_FOUND}
          element={<Navigate replace to={ROUTES.MOVIES} />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
