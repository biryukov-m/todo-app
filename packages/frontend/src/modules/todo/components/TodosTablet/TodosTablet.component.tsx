import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { ITodos } from '../TodosTable/todosTable.types';
import * as Styled from './TodosTablet.styled';
import { TodosMobileItem } from '../TodosMobile/TodosMobileItem.component';

export const TodosTablet: React.FC<ITodos> = ({ todos }) => (
  <SwipeableViews>
    {todos.map((todo) => (
      <Styled.Wrapper key={todo._id}>
        <TodosMobileItem {...todo} />
      </Styled.Wrapper>
    ))}
  </SwipeableViews>
);
