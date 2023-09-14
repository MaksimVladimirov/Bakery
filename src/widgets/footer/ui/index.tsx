import { JoinCommunity } from 'src/widgets/footer/ui/join-our-community';
import { Logo } from 'src/shared/logo';
import { Resources } from './resources';
import { Social } from './social';
import { Account } from './account';
import { About } from './about-company';
import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <JoinCommunity />
      <section className={styles.container}>
        <Logo />
        <Account />
        <About />
        <Resources />
        <Social />
        {/* <p className={styles.copyright}>©2021 Tarla</p> */}
      </section>
    </footer>
  );
}

export default Footer;
