import axios from "axios";
import { useEffect, useState } from "react";
import { Container, CustomLink } from "./Popular.styles";
import { PopularItem } from "./PopularItem";

export const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/movies/popular?limit=10`
      );

      setMovies(response.data);
    };
    get();
  }, []);

  return (
    <>
      <h3>Pelis populares</h3>
      <Container>
        {movies.map((movie) => {
          return (
            <CustomLink to={movie.id}>
              <PopularItem
                key={movie.id}
                title={movie.title}
                score={movie.averageScore}
              />
            </CustomLink>
          );
        })}
      </Container>
    </>
  );
};
