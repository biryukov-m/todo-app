import React from 'react';
import * as Styled from './TodosTableHead.styled';

export const TodosTableHead: React.FC = () => (
  <Styled.Thead>
    <Styled.Tr>
      <Styled.Th>Todo title</Styled.Th>
      <Styled.Th>Description</Styled.Th>
      <Styled.Th>Actions</Styled.Th>
    </Styled.Tr>
  </Styled.Thead>
);
