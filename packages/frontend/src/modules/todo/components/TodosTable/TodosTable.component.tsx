import React, { useEffect, useState } from 'react';
import * as Styled from './TodosTable.styled';
import { TodosTableHead } from './TodosTableHead.component';
import { TodosTableBody } from './TodosTableBody.component';
import { HandleSorting, ITodos } from './todosTable.types';

export const TodosTable: React.FC<ITodos> = ({ todos }) => {
  const [tableData, setTableData] = useState(todos);
  const columns = [
    { label: 'Title', accessor: 'title', sortable: true },
    { label: 'Description', accessor: 'description', sortable: true }
  ];
  const handleSorting: HandleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), ['en', 'ua', 'ru'], {
            numeric: true
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  useEffect(() => {
    setTableData(todos);
  }, [todos]);

  return (
    <Styled.Wrapper>
      <Styled.Table>
        <TodosTableHead columns={columns} handleSorting={handleSorting} />
        <TodosTableBody {...{ columns, tableData }} />
      </Styled.Table>
    </Styled.Wrapper>
  );
};
