import React from 'react';
import * as Styled from './TodosActions.styled';
import { CustomSwitch as StyledSwitch } from '../../../common/components/switch/switch.styled';
import { Button as StyledButton } from '../../../common/components/button/button.styled';
import { ITodo } from '../../../common/types/todo.types';

interface IProps {
  id: ITodo['_id'];
  isCompleted: ITodo['isCompleted'];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TodosActions: React.FC<IProps> = ({ id, isCompleted }) => (
  <Styled.Wrapper>
    <StyledButton>View</StyledButton>
    <StyledButton>Delete</StyledButton>
    <StyledSwitch checked={isCompleted} />
  </Styled.Wrapper>
);

export default TodosActions;
