import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import * as Styled from './Filters.styled';
import { Button as StyledButton } from '../../../common/components/button/button.styled';

export const Filters: React.FC = () => (
  <Styled.Wrapper>
    <Styled.ButtonGroup>
      <StyledButton>All</StyledButton>
      <StyledButton>Public</StyledButton>
      <StyledButton>Private</StyledButton>
      <StyledButton>Completed</StyledButton>
    </Styled.ButtonGroup>
    <Styled.SearchBarWrapper>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>
      <Styled.SearchBarField placeholder="Search here..." />
    </Styled.SearchBarWrapper>
  </Styled.Wrapper>
);
