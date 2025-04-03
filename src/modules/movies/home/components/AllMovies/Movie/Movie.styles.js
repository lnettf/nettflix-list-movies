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

const textCommon = css`
  margin: 0px;
`;

export const Title = styled.h4`
  ${textCommon}
  font-size: 24px;
`;

export const Year = styled.span`
  ${textCommon}
  color:rgb(185, 185, 185);
  padding-left: 10px;
  font-size: 10px;
`;

export const Synopsis = styled.p`
  ${textCommon}
  font-size: 14px;
`;

export const Genre = styled.p`
  ${textCommon}
  font-size: 12px;
`;

export const Director = styled.p`
  ${textCommon}
  font-size: 12px;
`;

export const Image = styled.img`
  border-radius: 8px;
`;
