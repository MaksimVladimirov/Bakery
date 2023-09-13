import { NavMenu } from 'src/shared/nav';
import styles from './styles.module.scss'

export const About = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>О компании</h4>
      <NavMenu />
    </div>
  );
};
