import { isValidObjectId, Model, model, Schema } from 'mongoose';
import { object, string, bool } from 'yup';

import { ITodo } from '../types/todos.type';

const todoSchema: Schema<ITodo> = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 40
    },
    description: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 2000
    },
    isPublic: {
      type: Boolean,
      default: false
    },
    isCompleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const postTodoValidationSchema = object().shape({
  title: string().min(5).max(40).required('Title is required field!'),
  description: string().min(5).max(2000).required('Description is required field!'),
  isPublic: bool().default(false),
  isCompleted: bool().default(false)
});

export const updateTodoValidationSchema = object().shape({
  _id: string()
    .test('valid-object-id', 'invalid object id', (value) => isValidObjectId(value))
    .required(),
  title: string().min(5).max(40),
  description: string().min(5).max(2000),
  isPublic: bool().default(false),
  isCompleted: bool().default(false)
});

export const getOneTodoValidationSchema = object().shape({
  todoId: string()
    .test('valid-object-id', 'invalid object id', (value) => isValidObjectId(value))
    .required()
});

export const Todo: Model<ITodo> = model('Todo', todoSchema);
