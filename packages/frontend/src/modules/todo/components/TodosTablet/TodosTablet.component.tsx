import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { ITodosProps } from '../TodosTable/todosTable.types';
import * as Styled from './TodosTablet.styled';
import { TodosMobileItem } from '../TodosMobile/TodosMobileItem.component';

export const TodosTablet: React.FC<ITodosProps> = ({ todos }) => (
  <SwipeableViews>
    {todos.map((todo) => (
      <Styled.Wrapper key={todo._id}>
        <TodosMobileItem {...todo} />
      </Styled.Wrapper>
    ))}
  </SwipeableViews>
);
