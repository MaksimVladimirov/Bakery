import React from 'react';
import { Link } from 'react-router-dom';

export const Account = () => {
  return (
    <div>
      <h4>Аккаунт</h4>
      <Link to="/register">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
      <Link to="/login">ВОЙТИ</Link>
    </div>
  );
};
