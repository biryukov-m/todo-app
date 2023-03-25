import React from 'react';
import { TodosActions } from '../TodosActions/TodosActions.component';
import * as Styled from './TodosMobileItem.styled';
import { ITodosItem } from '../../../common/types/todo.types';

export const TodosMobileItem: React.FC<ITodosItem> = ({ _id, title, description, isCompleted }) => (
  <Styled.Wrapper>
    <Styled.Title>{title}</Styled.Title>
    <Styled.Description>{description}</Styled.Description>
    <Styled.ActionsWrapper>
      <TodosActions id={_id} {...{ isCompleted }} />
    </Styled.ActionsWrapper>
  </Styled.Wrapper>
);
