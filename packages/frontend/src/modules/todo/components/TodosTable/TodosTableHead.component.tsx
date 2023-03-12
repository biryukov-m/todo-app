import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ITodo } from '../../../common/types/todo.types';
import { ITableHead, Order } from './todosTable.types';
import * as Styled from './TodosTableHead.styled';

export const TodosTableHead: React.FC<ITableHead> = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState<Order>('asc');
  const handleSortingChange = (accessor: keyof ITodo) => {
    const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  return (
    <Styled.Thead>
      <Styled.Tr>
        {columns.map(({ label, accessor, sortable }) => {
          const icon = sortable ? (
            sortField === accessor && order === 'asc' ? (
              <KeyboardArrowUpIcon />
            ) : sortField === accessor && order === 'desc' ? (
              <KeyboardArrowDownIcon />
            ) : (
              <Styled.DefaultIconHolder className="default-icon-holder">
                <KeyboardArrowUpIcon />
                <KeyboardArrowDownIcon />
              </Styled.DefaultIconHolder>
            )
          ) : (
            ''
          );
          return (
            <Styled.Th
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor as keyof ITodo) : undefined}
            >
              <Styled.IconHolder>
                {label}
                {icon}
              </Styled.IconHolder>
            </Styled.Th>
          );
        })}
        <Styled.Th>Actions</Styled.Th>
      </Styled.Tr>
    </Styled.Thead>
  );
};
