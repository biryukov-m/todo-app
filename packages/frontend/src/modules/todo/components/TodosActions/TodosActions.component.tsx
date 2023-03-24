import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import * as Styled from './TodosActions.styled';
import { CustomSwitch as StyledSwitch } from '../../../common/components/switch/switch.styled';
import { Button as StyledButton } from '../../../common/components/button/button.styled';
import { TodoModel } from '../../../models/Todo.model';
import todoService from '../../../../services/todo.service';
import { QueryKeys, ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import { ITodoUpdateBody } from '../../../common/types/todo.types';
import { TodoEditForm } from '../TodoForm/TodoEditForm.component';

interface IProps {
  id: TodoModel['_id'];
  isCompleted: TodoModel['isCompleted'];
}

export const TodosActions: React.FC<IProps> = ({ id, isCompleted }) => {
  const [modal, setModal] = useState(false);

  const queryClient = useQueryClient();
  const { mutate: deleteTodo } = useMutation({
    mutationFn: (todoId: string) => todoService.deleteTodo(todoId),
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.TODOS]);
    }
  });

  const { mutate: switchCompletedTodo } = useMutation({
    mutationFn: (body: ITodoUpdateBody) => todoService.updateTodo(body),
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.TODOS]);
      queryClient.refetchQueries([QueryKeys.TODO, id]);
    }
  });

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  const handleEditClick = () => {
    setModal(true);
  };

  const handleSwitchCompletedClick = () => {
    switchCompletedTodo({ _id: id, isCompleted: !isCompleted });
  };

  const modalRoot = document.getElementById('modal');

  return (
    <Styled.Wrapper>
      {modal &&
        modalRoot &&
        createPortal(<TodoEditForm {...{ id }} onClose={() => setModal(false)} />, modalRoot)}
      <Link to={ROUTER_KEYS.TODO.replace(':id', id)}>
        <StyledButton>View</StyledButton>
      </Link>
      <StyledButton onClick={handleEditClick}>Edit</StyledButton>
      <StyledButton onClick={handleDeleteClick}>Delete</StyledButton>
      <Styled.SwitchContainer>
        <StyledSwitch onClick={handleSwitchCompletedClick} checked={isCompleted} />
      </Styled.SwitchContainer>
    </Styled.Wrapper>
  );
};

export default TodosActions;
