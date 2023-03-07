import { IRequest, IOneTodoReqParams } from '../types/request.type';
import { ITodo } from '../types/todos.type';
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

  async update(req: IRequest<ITodo, {}>) {
    const updatedTodo = await Todo.updateOne({ _id: req.body._id }, { ...req.body });
    return updatedTodo;
  }

  async findOne(req: IRequest<{}, IOneTodoReqParams>) {
    const todo = await Todo.findById(req.params.todoId);
    return todo;
  }

  async deleteOne(req: IRequest<{}, IOneTodoReqParams>) {
    const todo = await Todo.deleteOne({ _id: req.params.todoId });
    return todo;
  }
}
