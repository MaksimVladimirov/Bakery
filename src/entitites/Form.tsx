import { FC, useState } from 'react';

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h1>{title}</h1>

      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="пароль" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <button onClick={() => handleClick(email, password)}> {title}</button>
    </>
  );
};
