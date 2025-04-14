import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
