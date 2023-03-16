import React from 'react';
import * as Styled from './TodosActions.styled';
import { CustomSwitch as StyledSwitch } from '../../../common/components/switch/switch.styled';
import { Button as StyledButton } from '../../../common/components/button/button.styled';
import { TodoModel } from '../../../models/Todo.model';

interface IProps {
  id: TodoModel['_id'];
  isCompleted: TodoModel['isCompleted'];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TodosActions: React.FC<IProps> = ({ id, isCompleted }) => {
  console.log(' ');

  return (
    <Styled.Wrapper>
      <StyledButton>View</StyledButton>
      <StyledButton>Delete</StyledButton>
      <StyledSwitch checked={isCompleted} />
    </Styled.Wrapper>
  );
};

export default TodosActions;
