import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

export const BackToStartPageButton = () => {
  return (
    <Link to="/">
      <button className={styles.button}>Вернуться назад</button>
    </Link>
  );
};
