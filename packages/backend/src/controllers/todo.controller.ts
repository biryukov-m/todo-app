import { Response, Request } from 'express';
import { IRequest } from '../types/request.type';
import { ITodo } from '../types/todos.type';
import { TodoService } from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: Request, res: Response) {
    const todos = await this.todoService.findAll();
    res.send(todos);
  }

  async addTodo(req: IRequest<ITodo>, res: Response) {
    const newTodo = await this.todoService.Add(req);
    res.send(newTodo);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
