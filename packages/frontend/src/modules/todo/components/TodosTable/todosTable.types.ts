import { ITodo } from '../../../common/types/todo.types';
import { TodoModel } from '../../../models/Todo.model';

export type Order = 'asc' | 'desc';

export type HandleSorting = (accessor: keyof ITodo, sortOrder: Order) => void;

export interface IColumn {
  label: string;
  accessor: string;
  sortable: boolean;
}

export interface ITodos {
  todos: TodoModel[];
}

export interface ITableHead {
  columns: IColumn[];
  handleSorting: HandleSorting;
}

export interface ITableBody {
  columns: IColumn[];
  tableData: ITodo[];
}
