import { Link } from "react-router";
import styled from "styled-components";

const Container = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const GoBack = () => {
  return (
    <Container to="/movies">
      <span>⬅</span>Go Back
    </Container>
  );
};
