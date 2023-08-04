import { Link } from 'react-scroll';
import styles from './styles.module.scss';

export const NavMenu = () => {
  return (
    <>
      <a href="" className={styles.links}>
        <Link to="targetSection" smooth={true} duration={500}>
          SHOP
        </Link>
      </a>

      <a href="" className={styles.links}>
        <Link to="targetSection" smooth={true} duration={500}>
          OUR STORY
        </Link>
      </a>

      <a href="" className={styles.links}>
        <Link to="targetSection" smooth={true} duration={500}>
          WHO IS TARLA?
        </Link>
      </a>
    </>
  );
};
