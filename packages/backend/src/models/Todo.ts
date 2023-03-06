import { Model, model, Schema } from 'mongoose';
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

const Todo: Model<ITodo> = model('Todo', todoSchema);

export default Todo;
