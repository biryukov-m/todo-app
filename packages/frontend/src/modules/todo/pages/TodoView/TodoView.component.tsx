import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import todoService from '../../../../services/todo.service';
import { Spinner } from '../../../common/components/spinner/spinner.styled';
import { CustomSwitch } from '../../../common/components/switch/switch.styled';
import { QueryKeys } from '../../../common/consts/app-keys.const';
import { TodoModel } from '../../../models/Todo.model';
import * as Styled from './TodoView.styled';

export const TodoView: React.FC = () => {
  const { id } = useParams<{ id: TodoModel['_id'] }>();

  const {
    data: todo,
    isLoading,
    isSuccess
  } = useQuery({
    queryKey: [QueryKeys.TODO, id],
    queryFn: () => todoService.getTodo(id as string)
  });

  if (isLoading) {
    return (
      <Styled.SpinnerWrapper>
        <Spinner />
      </Styled.SpinnerWrapper>
    );
  }
  if (isSuccess) {
    return (
      <>
        <Styled.Article>
          <Styled.Title>{todo.title}</Styled.Title>
          <Styled.ArticleSubHeader>Description: </Styled.ArticleSubHeader>
          <Styled.Text>{todo.description}</Styled.Text>
        </Styled.Article>
        <Styled.Switches>
          <Styled.SwitchContainer>
            <Styled.Label>Completed</Styled.Label>
            <CustomSwitch checked={todo.isCompleted} />
          </Styled.SwitchContainer>
          <Styled.SwitchContainer>
            <Styled.Label>Public</Styled.Label>
            <CustomSwitch checked={todo.isPublic} />
          </Styled.SwitchContainer>
        </Styled.Switches>
        <span>Back</span>
      </>
    );
  }

  return <h3>Todo loading failed</h3>;
};
