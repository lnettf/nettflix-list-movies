import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
`;

export const Item = styled.div`
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
