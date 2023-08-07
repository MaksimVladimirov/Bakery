import { Form } from '../../entitites/Form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'src/features/userSlice';
import { useAppDispatch } from 'src/features/userSlice/hooks/redux-hooks';

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/');
      })
      .catch(() => {
        alert('Такого пользователя не существует');
      });
  };

  return (
    <>
      <Form title="Войти" handleClick={handleLogin}></Form>
      или
      <Link to="/register"> зарегистрироваться</Link>
    </>
  );
};

export default Login;
