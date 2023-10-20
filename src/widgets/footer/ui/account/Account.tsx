import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Account = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Аккаунт</h4>
      <Link to="/register">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
      <Link to="/login">ВОЙТИ</Link>
    </div>
  );
};
