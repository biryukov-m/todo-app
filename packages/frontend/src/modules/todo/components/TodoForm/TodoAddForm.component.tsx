import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as Styled from './TodoForm.styled';
import { Button as StyledButton } from '../../../common/components/button/button.styled';
import todoService from '../../../../services/todo.service';
import { ITodoPostBody } from '../../../common/types/todo.types';
import { QueryKeys } from '../../../common/consts/app-keys.const';
import { CustomSwitch } from '../../../common/components/switch/switch.styled';
import { todoFormValidationSchema } from './TodoFormValidationSchema';

interface IProps {
  onClose(): void;
}

export const AddTodoForm: React.FC<IProps> = ({ onClose }) => {
  const queryClient = useQueryClient();
  const { mutate: addTodo } = useMutation({
    mutationFn: (body: ITodoPostBody) => todoService.addTodo(body),
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.TODOS]);
    }
  });

  const handleClose = () => onClose();

  return (
    <Styled.Wrapper>
      <Styled.Inner onMouseDown={() => handleClose()}>
        <Formik
          initialValues={{ title: '', description: '', isPublic: false }}
          validationSchema={todoFormValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            addTodo(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({ isSubmitting, values, handleChange }) => (
            <Form onMouseDown={(e) => e.stopPropagation()}>
              <h2>Add Todo</h2>

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
};
