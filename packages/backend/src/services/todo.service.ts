import { ITodo, ITodoUpdate } from '../types/todos.type';
import { Todo } from '../models/Todo';

export class TodoService {
  async findAll() {
    const todos = await Todo.find();
    return todos;
  }

  async add(todo: ITodo) {
    const newTodo = await Todo.create({ ...todo });
    return newTodo;
  }

  async update(todo: ITodoUpdate) {
    const updatedTodo = await Todo.findByIdAndUpdate(todo._id, todo, { new: true });
    return updatedTodo;
  }

  async findOne(_id: string) {
    const todo = await Todo.findById(_id);
    return todo;
  }

  async deleteOne(_id: string) {
    const deletedTodo = await Todo.findByIdAndDelete(_id);
    return deletedTodo;
  }
}
