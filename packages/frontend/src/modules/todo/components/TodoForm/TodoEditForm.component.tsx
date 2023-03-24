import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { UseMutateFunction } from '@tanstack/react-query';
import * as Styled from './TodoForm.styled';
import { Button as StyledButton } from '../../../common/components/button/button.styled';
import { CustomSwitch } from '../../../common/components/switch/switch.styled';
import { todoFormValidationSchema } from './TodoFormValidationSchema';
import { TodoModel } from '../../../models/Todo.model';
import { ITodoUpdateBody } from '../../../common/types/todo.types';

interface IProps {
  todo: TodoModel;
  onClose(): void;
  updateTodo: UseMutateFunction<Response, unknown, ITodoUpdateBody, unknown>;
}

export const TodoEditForm: React.FC<IProps> = ({ todo, onClose, updateTodo }) => (
  <Styled.Wrapper>
    <Styled.Inner>
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
          <Form>
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
