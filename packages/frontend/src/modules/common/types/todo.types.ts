export interface ITodo {
  _id: string;
  title: string;
  description: string;
  isPublic: boolean;
  isCompleted: boolean;
}

export interface ITodosItem {
  _id: ITodo['_id'];
  title: ITodo['title'];
  description: ITodo['description'];
  isCompleted: ITodo['isCompleted'];
}
