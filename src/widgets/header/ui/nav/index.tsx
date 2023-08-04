import { Link } from 'react-scroll';
import styles from './styles.module.scss';

export const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.links} to="targetSection" smooth={true} duration={500}>
        SHOP
      </Link>

      <Link className={styles.links} to="targetSection" smooth={true} duration={500}>
        OUR STORY
      </Link>

      <Link className={styles.links} to="targetSection" smooth={true} duration={500}>
        WHO IS TARLA?
      </Link>
    </nav>
  );
};
