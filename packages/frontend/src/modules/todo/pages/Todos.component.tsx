import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Filters } from '../components/Filters/Filters.component';
import { TodosTable } from '../components/TodosTable/TodosTable.component';
import { TodosMobile } from '../components/TodosMobile/TodosMobile.component';
import { TodosTablet } from '../components/TodosTablet/TodosTablet.component';
import { useViewPortWidth } from '../../common/hooks/useViewPortWidth';
import { MEDIA } from '../../theme';
import todoService from '../../../services/todo.service';
import * as Styled from './Todos.styles';
import { Spinner as StyledSpinner } from '../../common/components/spinner/spinner.styled';
import { QueryKeys } from '../../common/consts/app-keys.const';

export const Todos: React.FC = () => {
  const {
    data: todos,
    isLoading,
    isSuccess
  } = useQuery({
    queryFn: () => todoService.getTodos(),
    queryKey: [QueryKeys.TODOS],
    staleTime: 30000
  });

  const viewPortWidth = useViewPortWidth(window.innerWidth);

  if (isLoading) {
    return (
      <>
        <Filters />
        <Styled.SpinnerWrapper>
          <StyledSpinner />
        </Styled.SpinnerWrapper>
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        <Filters />
        {viewPortWidth > MEDIA.tablet && <TodosTable {...{ todos }} />}
        {viewPortWidth < MEDIA.tablet && viewPortWidth > MEDIA.mobile && (
          <TodosTablet {...{ todos }} />
        )}
        {viewPortWidth < MEDIA.mobile && <TodosMobile {...{ todos }} />}
        <span>Pagination</span>
      </>
    );
  }

  return <>Todo loading failed</>;
};
