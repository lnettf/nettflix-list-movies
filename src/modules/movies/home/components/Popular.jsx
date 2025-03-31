import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Item } from "./Popular.styles";

export const Popular = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const get = async () => {
      const response = await axios.get(
        "https://nettflix.onrender.com/movies/popular?limit=10"
      );

      setData(response.data);
    };
    get();
  }, []);

  return (
    <>
      <h3>Pelis populares</h3>
      <Container>
        {data.map((movie) => {
          return <Item key={movie.id}>{movie.title}</Item>;
        })}
      </Container>
    </>
  );
};
