import React from 'react';
import { ITableBody } from './todosTable.types';
import { TodosActions } from '../TodosActions/TodosActions.component';
import * as Styled from './TodosTableBody.styled';
import { TodoModel } from '../../../models/Todo.model';

export const TodosTableBody: React.FC<ITableBody> = ({ columns, tableData }) => (
  <Styled.Tbody>
    {tableData.map((todo) => (
      <Styled.Tr key={todo._id}>
        {columns.map(({ accessor }, idx) => {
          const tData = todo[accessor as keyof TodoModel];
          return <Styled.Td key={idx}>{tData}</Styled.Td>;
        })}
        <Styled.Td key={todo._id}>
          <TodosActions id={todo._id} isCompleted={todo.isCompleted} />
        </Styled.Td>
      </Styled.Tr>
    ))}
  </Styled.Tbody>
);
