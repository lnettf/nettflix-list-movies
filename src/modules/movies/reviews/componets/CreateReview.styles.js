import { useState } from "react";
import styled from "styled-components";

export const CreateReviewContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  &:disabled {
    opacity: 0.3;
  }
`;
