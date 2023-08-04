import { Link } from 'react-router-dom';
import PersonImg from '/public/images/person.svg';
import styles from './styles.module.scss';

export const LogIn = () => {
  return (
    <Link to="/login" className={styles.login}>
      <img src={PersonImg} alt="Person" width={40} height={40} />
      <p>Log in</p>
    </Link>
  );
};
