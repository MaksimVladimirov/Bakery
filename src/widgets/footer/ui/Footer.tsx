import { JoinCommunity } from 'src/widgets/footer/ui/join-our-community/JoinOurCompany';
import { Logo } from 'src/shared/logo/Logo';
import { Resources } from './resources/Resources';
import { Social } from './social/Social';
import { Account } from './account/Account';
import { About } from './about-company/About';
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
        <p className={styles.copyright}>©2021 Tarla</p>
      </section>
    </footer>
  );
}

export default Footer;
