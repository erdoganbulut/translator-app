import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));

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
  </Routes>
);

export default Router;
