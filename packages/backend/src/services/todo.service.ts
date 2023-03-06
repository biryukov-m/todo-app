import { IRequest } from '../types/request.type';
import { ITodo } from '../types/todos.type';
import Todo from '../models/Todo';

export class TodoService {
  async findAll() {
    const todos = await Todo.find();
    return todos;
  }

  async Add(req: IRequest<ITodo>) {
    const newTodo = await Todo.create({ ...req.body });
    return newTodo;
  }
}
