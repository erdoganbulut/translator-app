import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const History = lazy(() => import('./History'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<Spin />}>
          <Home />
        </Suspense>
      }
    />
    <Route
      path="/history"
      element={
        <Suspense fallback={<Spin />}>
          <History />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
