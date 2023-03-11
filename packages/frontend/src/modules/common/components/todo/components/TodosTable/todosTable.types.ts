import { ITodo } from '../../../../types/todo.types';

export type Order = 'asc' | 'desc';

export type HandleSorting = (accessor: keyof ITodo, sortOrder: Order) => void;

export interface IColumn {
  label: string;
  accessor: string;
  sortable: boolean;
}

export interface ITable {
  todos: ITodo[];
}

export interface ITableHead {
  columns: IColumn[];
  handleSorting: HandleSorting;
}

export interface ITableBody {
  columns: IColumn[];
  tableData: ITodo[];
}
