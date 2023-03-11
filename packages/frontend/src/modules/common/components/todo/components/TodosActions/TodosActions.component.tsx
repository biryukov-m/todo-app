import React from 'react';
import * as Styled from './TodosActions.styled';
import { CustomSwitch as StyledSwitch } from '../../../switch/switch.styled';
import { Button as StyledButton } from '../../../button/button.styled';
import { ITodo } from '../../../../types/todo.types';

interface IProps {
  id: ITodo['_id'];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TodosActions: React.FC<IProps> = ({ id }) => (
  <Styled.Wrapper>
    <StyledButton>View</StyledButton>
    <StyledButton>Delete</StyledButton>
    <StyledSwitch />
  </Styled.Wrapper>
);

export default TodosActions;
