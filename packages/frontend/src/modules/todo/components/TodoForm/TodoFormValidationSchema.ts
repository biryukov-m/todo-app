import { object, string } from 'yup';

export const todoFormValidationSchema = object().shape({
  title: string().min(5).max(40).required('Title is required field!'),
  description: string().min(5).max(2000).required('Description is required field!')
});
