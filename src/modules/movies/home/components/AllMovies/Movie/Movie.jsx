import {
  Container,
  Genre,
  Image,
  Info,
  Synopsis,
  Title,
  Director,
  Year,
} from "./Movie.styles";

export const Movie = ({ data: movie }) => {
  const { title, synopsis, genre, year, director } = movie;

  return (
    <Container to={`/movies/${movie.id}`}>
      <Image src="https://placehold.co/120x120" alt="" />
      <Info>
        <Title>
          {title}
          <Year>{year}</Year>
        </Title>
        <Synopsis>{synopsis}</Synopsis>
        <Genre>#{genre}</Genre>
        <Director>By: {director}</Director>
      </Info>
    </Container>
  );
};
