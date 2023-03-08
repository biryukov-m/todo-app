import { IRequest } from '../types/request.type';
import { ITodo, IOneTodoReqParams, ITodoUpdate } from '../types/todos.type';
import { TodoService } from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllTodo(req: IRequest<{}, {}>) {
    const todos = await this.todoService.findAll();
    return todos;
  }

  async addTodo(req: IRequest<ITodo, {}>) {
    const newTodo = await this.todoService.add(req.body);
    return newTodo;
  }

  async updateTodo(req: IRequest<ITodoUpdate, {}>) {
    const result = await this.todoService.update(req.body);
    return result;
  }

  async getOneTodo(req: IRequest<{}, IOneTodoReqParams>) {
    const todo = this.todoService.findOne(req.params.id);
    return todo;
  }

  async deleteOneTodo(req: IRequest<{}, IOneTodoReqParams>) {
    const result = await this.todoService.deleteOne(req.params.id);
    return result;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
