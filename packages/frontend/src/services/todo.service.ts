import { BackendKeys } from '../modules/common/consts/app-keys.const';
import { ITodoPostBody, ITodoUpdateBody } from '../modules/common/types/todo.types';
import { createTodoModel, TodoModel } from '../modules/models/Todo.model';
import { HttpService } from './http.service';

class TodoService extends HttpService {
  moduleUrl: string;

  constructor() {
    super();
    this.moduleUrl = BackendKeys.TODOS_ROOT;
  }

  async getTodos() {
    const response = await this.get({ url: this.moduleUrl });
    const json = await response.json();
    const todos: TodoModel[] = json.result;
    return todos.map((todo) => createTodoModel(todo));
  }

  async getTodo(id: string) {
    const response = await this.get({ url: `${this.moduleUrl}/${id}` });
    const json = await response.json();
    const todo: TodoModel = json.result;
    return createTodoModel(todo);
  }

  addTodo(body: ITodoPostBody) {
    return this.post({ url: this.moduleUrl, body: JSON.stringify(body) });
  }

  updateTodo(body: ITodoUpdateBody) {
    return this.put({ url: this.moduleUrl, body: JSON.stringify(body) });
  }

  deleteTodo(id: string) {
    return this.delete({ url: `${this.moduleUrl}/${id}` });
  }
}

export default new TodoService();
