import { Logo } from '../../../shared/logo/Logo';
import { NavMenu } from 'src/shared/nav/NavMenu';
import { LogIn } from './log-in/LogIn';
import { Basket } from './basket/Basket';
import { LogOut } from './log-out/LogOut';
import styles from './styles.module.scss';
import { useAuth } from 'src/features/userSlice/hooks/useAuth';

const Header = () => {
  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={styles.navmenu}>
        <Logo />
        <NavMenu />
      </nav>
      <div className={styles.links}>
        {!isAuth ? <LogIn /> : <LogOut />}
        <Basket />
      </div>
    </header>
  );
};

export default Header;
