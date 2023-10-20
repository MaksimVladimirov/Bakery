import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = lazy(() => import('./login/LoginPage'));
const BasketPage = lazy(() => import('./basket/BasketPage'));
const HomePage = lazy(() => import('./home/HomePage'));
const RegisterPage = lazy(() => import('./register/RegisterPage'));

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
