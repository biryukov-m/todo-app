import React from 'react';
import { ITodo } from '../../../../types/todo.types';
import { ITableBody } from './todosTable.types';
import { TodosActions } from '../TodosActions/TodosActions.component';
import * as Styled from './TodosTableBody.styled';

export const TodosTableBody: React.FC<ITableBody> = ({ columns, tableData }) => (
  <Styled.Tbody>
    {tableData.map((todo) => (
      <Styled.Tr key={todo._id}>
        {columns.map(({ accessor }, idx) => {
          const tData = todo[accessor as keyof ITodo];
          return <Styled.Td key={idx}>{tData}</Styled.Td>;
        })}
        <Styled.Td key={todo._id}>
          <TodosActions id={todo._id} />
        </Styled.Td>
      </Styled.Tr>
    ))}
  </Styled.Tbody>
);
