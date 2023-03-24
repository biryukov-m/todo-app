import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import todoService from '../../../../services/todo.service';
import { ITodoUpdateBody } from '../../../common/types/todo.types';
import { QueryKeys } from '../../../common/consts/app-keys.const';
import { useTodo } from '../../hooks/useTodo';
import { Spinner } from '../../../common/components/spinner/spinner.styled';
import { SpinnerWrapper } from '../../pages/TodoView/TodoView.styled';
import { TodoEditForm } from './TodoEditForm.component';

interface IProps {
  id: string;
  onClose(): void;
}

export const TodoFormEdit: React.FC<IProps> = ({ id, onClose }) => {
  const queryClient = useQueryClient();
  const { data: todo, error, isLoading, isSuccess } = useTodo(id);
  const { mutate: updateTodo } = useMutation({
    mutationFn: (body: ITodoUpdateBody) => todoService.updateTodo(body),
    onSuccess: () => {
      queryClient.refetchQueries([QueryKeys.TODOS]);
      queryClient.refetchQueries([QueryKeys.TODO, id]);
    }
  });

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (isSuccess) {
    return <TodoEditForm onClose={onClose} todo={todo} updateTodo={updateTodo} />;
  }

  return (
    <h3>
      Error while loading todo: {error instanceof Error ? error.message : JSON.stringify(error)}
    </h3>
  );
};
