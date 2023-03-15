import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button as StyledButton } from '../../../common/components/button/button.styled';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm.component';
import * as Styled from './Header.styled';

export const Header: React.FC = () => {
  const [modal, setModal] = useState(false);

  function handleAddTodoClick() {
    setModal(true);
  }

  const modalRoot = document.getElementById('modal');

  return (
    <Styled.Layout>
      <Styled.Flex>
        <StyledButton>My profile</StyledButton>
        <Styled.ButtonGroup>
          <StyledButton>Todo list</StyledButton>
          <StyledButton onClick={() => handleAddTodoClick()}>Add Todo</StyledButton>
          {modal &&
            modalRoot &&
            createPortal(<AddTodoForm onClose={() => setModal(false)} />, modalRoot)}
        </Styled.ButtonGroup>
      </Styled.Flex>
    </Styled.Layout>
  );
};
