import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  border-radius: 4px;
  flex-direction: column;
  border: solid 1px rgba(169, 169, 169);
  align-items: center;
  padding: 4px;
`;

export const Title = styled.p`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-decoration: none;
  margin: 0px;
`;

export const Image = styled.img`
  width: 120px;
  height: 100px;
  text-decoration: none;
`;
