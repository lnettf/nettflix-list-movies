import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Image = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
`;

const CommonStyles = css`
  margin: 0px;
`;

export const Title = styled.h1`
  ${CommonStyles}
`;

export const Text = styled.p`
  ${CommonStyles}
  font-size: 16px;
`;

export const Span = styled.span`
  ${CommonStyles}
  font-size: 14px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-direction: column;
`;
