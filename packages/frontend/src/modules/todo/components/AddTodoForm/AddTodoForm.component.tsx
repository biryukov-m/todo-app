import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import * as Styled from './AddTodoForm.styled';
import { Button as StyledButton } from '../../../common/components/button/button.styled';

interface IProps {
  onClose(): void;
}

export const addTodoFormValidationSchema = object().shape({
  title: string().min(5).max(40).required('Title is required field!'),
  description: string().min(5).max(2000).required('Description is required field!')
});

export const AddTodoForm: React.FC<IProps> = ({ onClose }) => {
  console.log('asdf');
  return (
    <Styled.Wrapper>
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={addTodoFormValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className="errors" />
            <Field type="text" as="textarea" rows="10" name="description" />
            <ErrorMessage name="description" component="div" className="errors" />
            <StyledButton type="button" onClick={onClose}>
              Close
            </StyledButton>
            <StyledButton type="submit" disabled={isSubmitting}>
              Submit
            </StyledButton>
          </Form>
        )}
      </Formik>
    </Styled.Wrapper>
  );
};
