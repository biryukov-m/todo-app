import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as Styled from './AddTodoForm.styled';
import { Button as StyledButton } from '../../../common/components/button/button.styled';
import todoService from '../../../../services/todo.service';
import { ITodoPostBody } from '../../../common/types/todo.types';
import { QueryKeys } from '../../../common/consts/app-keys.const';

interface IProps {
  onClose(): void;
}

export const addTodoFormValidationSchema = object().shape({
  title: string().min(5).max(40).required('Title is required field!'),
  description: string().min(5).max(2000).required('Description is required field!')
});

export const AddTodoForm: React.FC<IProps> = ({ onClose }) => {
  const queryClient = useQueryClient();
  const { mutate: addTodo } = useMutation({
    mutationFn: (body: ITodoPostBody) => todoService.addTodo(body),
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.TODOS]);
    }
  });

  return (
    <Styled.Wrapper>
      <Styled.Inner>
        <Formik
          initialValues={{ title: '', description: '' }}
          validationSchema={addTodoFormValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            addTodo(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <h2>Add Todo</h2>
              <Field type="text" name="title" />
              <Styled.ErrorContainer>
                <ErrorMessage name="title" component="div" className="errors" />
              </Styled.ErrorContainer>
              <Field type="text" as="textarea" rows="10" name="description" />
              <Styled.ErrorContainer>
                <ErrorMessage name="description" component="div" className="errors" />
              </Styled.ErrorContainer>
              <Styled.ButtonsContainer>
                <StyledButton type="button" onClick={onClose}>
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
};
