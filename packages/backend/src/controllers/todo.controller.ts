import { IOneTodoReqParams, IRequest } from '../types/request.type';
import { ITodo } from '../types/todos.type';
import { TodoService } from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getAllTodo(req: IRequest<{}, {}>) {
    const todos = await this.todoService.findAll();
    return todos;
  }

  async addTodo(req: IRequest<ITodo, {}>) {
    const newTodo = await this.todoService.add(req);
    return newTodo;
  }

  async updateTodo(req: IRequest<ITodo, {}>) {
    const result = await this.todoService.update(req);
    return result;
  }

  async getOneTodo(req: IRequest<{}, IOneTodoReqParams>) {
    const todo = this.todoService.findOne(req);
    return todo;
  }

  async deleteOneTodo(req: IRequest<{}, IOneTodoReqParams>) {
    const result = await this.todoService.deleteOne(req);
    return result;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
