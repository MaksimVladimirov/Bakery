import { Logo } from './logo';
import { NavMenu } from './nav';
import { LogIn } from './logIn';
import { Basket } from './basket';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Logo />
        <NavMenu />
      </nav>
      <div className={styles.links}>
        <LogIn />
        <Basket />
      </div>
    </header>
  );
};

export default Header;
