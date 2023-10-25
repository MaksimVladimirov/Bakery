import { Link } from 'react-router-dom';
import { useAppDispatch } from 'src/features/userSlice/hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from 'src/features/authForm/Form';
import { setUser } from 'src/features/userSlice/userSlice';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/');
      })
      .catch(console.error);
  };
  return (
    <>
      <Form title="Регистрация" handleClick={handleRegister}></Form>
      <p>
        Вы зарегестрированы? <Link to="/login"> Войти</Link>
      </p>
    </>
  );
};

export default RegisterPage;
