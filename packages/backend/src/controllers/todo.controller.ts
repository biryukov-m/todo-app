import { Response } from 'express';
import { IOneTodoReqParams, IRequest } from '../types/request.type';
import { ITodo } from '../types/todos.type';
import { TodoService } from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: IRequest<{}, {}>, res: Response) {
    const todos = await this.todoService.findAll();
    res.send(todos);
  }

  async addTodo(req: IRequest<ITodo, {}>, res: Response) {
    const newTodo = await this.todoService.add(req);
    res.send(newTodo);
  }

  async updateTodo(req: IRequest<ITodo, {}>, res: Response) {
    const updatedTodo = await this.todoService.update(req);
    res.send(updatedTodo);
  }

  async getOneTodo(req: IRequest<{}, IOneTodoReqParams>, res: Response) {
    const todo = await this.todoService.findOne(req);
    res.send(todo);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
