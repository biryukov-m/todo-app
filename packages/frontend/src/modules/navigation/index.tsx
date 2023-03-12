import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePageContainer from '../home';
import { APP_KEYS } from '../common/consts';
import { Layout } from '../todo/layout/Layout.component';
import { Todos } from '../todo/pages/Todos.component';

export const MainRouter = () => (
  <Router>
    <Routes>
      {/* <Route component={HomePageContainer} path={APP_KEYS.ROUTER_KEYS.ROOT} /> */}
      <Route element={<Layout />} path={APP_KEYS.ROUTER_KEYS.TODOS_ROOT}>
        <Route element={<Todos />} path={APP_KEYS.ROUTER_KEYS.TODOS_ROOT} />
      </Route>
    </Routes>
  </Router>
);
