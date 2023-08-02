import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const AuthPage = lazy(() => import('./authPage/index'));
const BasketPage = lazy(() => import('./basketPage/index'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
