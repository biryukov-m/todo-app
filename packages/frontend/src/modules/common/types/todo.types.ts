import { TodoModel } from '../../models/Todo.model';

export interface ITodosItem {
  _id: TodoModel['_id'];
  title: TodoModel['title'];
  description: TodoModel['description'];
  isCompleted: TodoModel['isCompleted'];
}

export interface ITodoPostBody {
  title: TodoModel['title'];
  description: TodoModel['description'];
  isCompleted?: TodoModel['isCompleted'];
  isPublic?: TodoModel['isPublic'];
}

export interface ITodoUpdateBody {
  _id: TodoModel['_id'];
  title?: TodoModel['title'];
  description?: TodoModel['description'];
  isCompleted?: TodoModel['isCompleted'];
  isPublic?: TodoModel['isPublic'];
}
