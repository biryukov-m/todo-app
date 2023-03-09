import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header.component';
import * as Styled from './Layout.styled';

export const Layout: React.FC = () => (
  <>
    <Header />
    <Styled.Layout>
      <Outlet />
    </Styled.Layout>
  </>
);
