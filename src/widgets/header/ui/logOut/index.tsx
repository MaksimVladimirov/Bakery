import PersonImg from '/public/images/person.svg';
import styles from './styles.module.scss';
import { removeUser } from 'src/features/userSlice';
import { useAppDispatch } from 'src/features/userSlice/hooks/redux-hooks';

export const LogOut = () => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(removeUser())} className={styles.login}>
      <img src={PersonImg} alt="Person" width={40} height={40} />
      <p>Log Out</p>
    </button>
  );
};
