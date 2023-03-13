import { ITodo } from '../common/types/todo.types';

export class TodoModel {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public isPublic: boolean,
    public isCompleted: boolean
  ) {}
}

export const createTodoModel = (todoFromServer: ITodo) =>
  new TodoModel(
    todoFromServer._id,
    todoFromServer.title,
    todoFromServer.description,
    todoFromServer.isCompleted,
    todoFromServer.isPublic
  );