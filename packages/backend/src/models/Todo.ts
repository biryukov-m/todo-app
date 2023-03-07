import { Model, model, Schema } from 'mongoose';
import Yup from 'yup';
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

export const todoValidationSchema = Yup.object().shape({
  title: Yup.string().min(5).max(40).required('Title is required field!'),
  description: Yup.string().min(5).max(2000).required('Description is required field!'),
  isPublic: Yup.bool().default(false),
  isCompleted: Yup.bool().default(false)
});

export const Todo: Model<ITodo> = model('Todo', todoSchema);
