import React from 'react';
import { ITodosProps } from '../TodosTable/todosTable.types';
import * as Styled from './TodosMobile.styled';
import { TodosMobileItem } from './TodosMobileItem.component';

export const TodosMobile: React.FC<ITodosProps> = ({ todos }) => (
  <Styled.Wrapper>
    {todos.map((todo) => (
      <TodosMobileItem key={todo._id} {...todo} />
    ))}
  </Styled.Wrapper>
);
