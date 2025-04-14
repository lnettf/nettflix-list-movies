import { Link } from "react-router";
import styled, { css } from "styled-components";

export const Container = styled(Link)`
  display: flex;
  padding: 4px;
  gap: 8px;
  text-decoration: none;
  color: rgb(59, 59, 59);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 8px;
`;
