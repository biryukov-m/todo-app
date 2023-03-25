import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './goBack.styled';

export const GoBack: React.FC = () => {
  const navigate = useNavigate();
  const goBackHandler = () => navigate(-1);
  return <Styled.GoBack onClick={goBackHandler}>Back</Styled.GoBack>;
};
