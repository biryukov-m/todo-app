import React from 'react';
import * as Styled from './TodosTable.styled';
import { TodosTableHead } from './TodosTableHead.component';
import { TodosTableBody } from './TodosTableBody.component';

export const TodosTable: React.FC = () => (
  <Styled.Wrapper>
    <Styled.Table>
      <TodosTableHead />
      <TodosTableBody />
    </Styled.Table>
  </Styled.Wrapper>
);
