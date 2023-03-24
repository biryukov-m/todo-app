import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import todoService from '../../../../services/todo.service';
import { QueryKeys } from '../../../common/consts/app-keys.const';
import { useTodo } from '../../hooks/useTodo';
import { Spinner } from '../../../common/components/spinner/spinner.styled';
import { SpinnerWrapper } from '../../pages/TodoView/TodoView.styled';
import * as Styled from './TodoForm.styled';
import { Button as StyledButton } from '../../../common/components/button/button.styled';
import { CustomSwitch } from '../../../common/components/switch/switch.styled';
import { todoFormValidationSchema } from './TodoFormValidationSchema';
import { ITodoUpdateBody } from '../../../common/types/todo.types';

interface IProps {
  id: string;
  onClose(): void;
}

export const TodoEditForm: React.FC<IProps> = ({ id, onClose }) => {
  const queryClient = useQueryClient();
  const { data: todo, error, isLoading, isSuccess } = useTodo(id);
  const { mutate: updateTodo } = useMutation({
    mutationFn: (body: ITodoUpdateBody) => todoService.updateTodo(body),
    onSuccess: () => {
      queryClient.refetchQueries([QueryKeys.TODOS]);
      queryClient.refetchQueries([QueryKeys.TODO, id]);
    }
  });

  const handleClose = () => onClose();

  if (isLoading) {
    return (
      <Styled.Wrapper>
        <Styled.Inner>
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        </Styled.Inner>
      </Styled.Wrapper>
    );
  }

  if (isSuccess) {
    return (
      <Styled.Wrapper>
        <Styled.Inner onMouseDown={() => handleClose()}>
          <Formik
            initialValues={{ ...todo }}
            validationSchema={todoFormValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              updateTodo(values);
              setSubmitting(false);
              onClose();
            }}
          >
            {({ isSubmitting, values, handleChange }) => (
              <Form onMouseDown={(e) => e.stopPropagation()}>
                <h2>Edit Todo</h2>

                <label htmlFor="title">Title</label>
                <Field type="text" name="title" id="title" />
                <Styled.ErrorContainer>
                  <ErrorMessage name="title" component="div" className="errors" />
                </Styled.ErrorContainer>

                <label htmlFor="description">Description</label>
                <Field type="text" as="textarea" rows="10" name="description" id="description" />
                <Styled.ErrorContainer>
                  <ErrorMessage name="description" component="div" className="errors" />
                </Styled.ErrorContainer>

                <Styled.SwitchContainer>
                  <label htmlFor="isPublic">Public</label>
                  <CustomSwitch
                    name="isPublic"
                    id="isPublic"
                    checked={values.isPublic}
                    onChange={handleChange}
                  />
                </Styled.SwitchContainer>

                <Styled.SwitchContainer>
                  <label htmlFor="isCompleted">Completed</label>
                  <CustomSwitch
                    name="isCompleted"
                    id="isCompleted"
                    checked={values.isCompleted}
                    onChange={handleChange}
                  />
                </Styled.SwitchContainer>

                <Styled.ButtonsContainer>
                  <StyledButton type="button" onClick={() => handleClose()}>
                    Close
                  </StyledButton>
                  <StyledButton type="submit" disabled={isSubmitting}>
                    Submit
                  </StyledButton>
                </Styled.ButtonsContainer>
              </Form>
            )}
          </Formik>
        </Styled.Inner>
      </Styled.Wrapper>
    );
  }

  return (
    <h3>
      Error while loading todo: {error instanceof Error ? error.message : JSON.stringify(error)}
    </h3>
  );
};
