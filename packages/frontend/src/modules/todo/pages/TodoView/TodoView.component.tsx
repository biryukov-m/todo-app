import React from 'react';
import { useParams } from 'react-router-dom';
import { GoBack } from '../../../common/components/goBack/goBack.component';
import { Spinner } from '../../../common/components/spinner/spinner.styled';
import { CustomSwitch } from '../../../common/components/switch/switch.styled';
import { TodoModel } from '../../../models/Todo.model';
import { useTodo } from '../../hooks/useTodo';
import * as Styled from './TodoView.styled';

export const TodoView: React.FC = () => {
  const { id } = useParams<{ id: TodoModel['_id'] }>();

  const { data: todo, isLoading, isSuccess } = useTodo(id as string);

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
        <GoBack />
      </>
    );
  }

  return <h3>Todo loading failed</h3>;
};
