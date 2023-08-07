import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('./login/index'));
const BasketPage = lazy(() => import('./basket/index'));
const HomePage = lazy(() => import('./home'));
const RegisterPage = lazy(() => import('./register/index'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
