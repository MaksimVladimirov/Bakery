import { Form } from '../../features/AuthForm/Form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from 'src/features/userSlice';
import { useAppDispatch } from 'src/features/userSlice/hooks/redux-hooks';
import styles from './styles.module.scss';

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
    <section className={styles.login}>
      <Form title="Войти" handleClick={handleLogin}></Form>
      или
      <Link to="/register"> зарегистрироваться</Link>
    </section>
  );
};

export default Login;
