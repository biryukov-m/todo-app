import { IRequest, IOneTodoReqParams } from '../types/request.type';
import { ITodo, ITodoUpdate } from '../types/todos.type';
import { Todo } from '../models/Todo';

export class TodoService {
  async findAll() {
    const todos = await Todo.find();
    return todos;
  }

  async add(req: IRequest<ITodo, {}>) {
    const newTodo = await Todo.create({ ...req.body });
    return newTodo;
  }

  async update(req: IRequest<ITodoUpdate, {}>) {
    const updatedTodo = await Todo.updateOne({ _id: req.body.id }, { ...req.body });
    return updatedTodo;
  }

  async findOne(req: IRequest<{}, IOneTodoReqParams>) {
    const todo = await Todo.findById(req.params.id);
    return todo;
  }

  async deleteOne(req: IRequest<{}, IOneTodoReqParams>) {
    const todo = await Todo.deleteOne({ _id: req.params.id });
    return todo;
  }
}
