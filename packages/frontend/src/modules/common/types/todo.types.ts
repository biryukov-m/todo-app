import { TodoModel } from '../../models/Todo.model';

export interface ITodosItem {
  _id: TodoModel['_id'];
  title: TodoModel['title'];
  description: TodoModel['description'];
  isCompleted: TodoModel['isCompleted'];
}
