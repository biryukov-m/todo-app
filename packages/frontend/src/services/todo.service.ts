import { BackendKeys } from '../modules/common/consts/app-keys.const';
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

  getTodo(id: string) {
    return this.get({ url: `${this.moduleUrl}/${id}` });
  }

  postTodo(body: BodyInit) {
    return this.post({ url: this.moduleUrl, body });
  }

  updateTodo(body: BodyInit) {
    return this.put({ url: this.moduleUrl, body });
  }

  deleteTodo(id: string) {
    return this.delete({ url: `${this.moduleUrl}/${id}` });
  }
}

export default new TodoService();
