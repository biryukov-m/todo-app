import React from 'react';
import { Button as StyledButton } from '../../../button/button.styled';
import * as Styled from './Header.styled';

export const Header: React.FC = () => (
  <Styled.Layout>
    <Styled.Flex>
      <StyledButton>My profile</StyledButton>
      <StyledButton>Todo list</StyledButton>
    </Styled.Flex>
  </Styled.Layout>
);
