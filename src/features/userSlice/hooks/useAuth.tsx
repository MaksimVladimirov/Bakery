import { useAppSelector } from './redux-hooks';

export const useAuth = () => {

  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
