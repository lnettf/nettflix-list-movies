import { useMovie } from "../hooks/useMovie";
import { Container, Image, Info, Text, Span, Title } from "./MovieCard.styles";

export const MovieCard = ({ id }) => {
  const { movie, isLoading, error } = useMovie(id);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  const { title, director, synopsis, year, country, genre } = movie;
  return (
    <Container>
      <Image src="https://placehold.co/260x260" alt="" />
      <Info>
        <Title>{title}</Title>
        <Text>{synopsis}</Text>
        <Text>{director}</Text>
        <Span>{year}</Span>
        <Span>🌆{country}</Span>
        <Span>#{genre}</Span>
      </Info>
    </Container>
  );
};
