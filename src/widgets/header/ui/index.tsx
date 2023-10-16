import { Logo } from '../../../shared/logo';
import { NavMenu } from 'src/shared/nav';
import { LogIn } from './log-in';
import { Basket } from './basket';
import { LogOut } from './log-out';
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
