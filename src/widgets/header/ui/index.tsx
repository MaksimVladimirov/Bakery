import { Logo } from './logo';
import { NavMenu } from './nav';
import { LogIn } from './logIn';
import { Basket } from './basket';

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavMenu />
      <LogIn />
      <Basket />
    </header>
  );
};

export default Header;
