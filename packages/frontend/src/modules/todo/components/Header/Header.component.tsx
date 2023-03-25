import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Button as StyledButton } from '../../../common/components/button/button.styled';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import { AddTodoForm } from '../TodoForm/TodoAddForm.component';
import * as Styled from './Header.styled';

export const Header: React.FC = () => {
  const [modal, setModal] = useState(false);

  function handleAddTodoClick() {
    setModal(true);
  }

  const modalRoot = document.getElementById('modal');

  return (
    <Styled.Wrapper>
      <Styled.Flex>
        <StyledButton>My profile</StyledButton>
        <Styled.ButtonGroup>
          <Link to={ROUTER_KEYS.TODOS_ROOT}>
            <StyledButton>Todo list</StyledButton>
          </Link>
          <StyledButton onClick={() => handleAddTodoClick()}>Add Todo</StyledButton>
          {modal &&
            modalRoot &&
            createPortal(<AddTodoForm onClose={() => setModal(false)} />, modalRoot)}
        </Styled.ButtonGroup>
      </Styled.Flex>
    </Styled.Wrapper>
  );
};
