import styles from './styles.module.scss'


export const JoinCommunity = () => {
  return (
    <div className={styles.join_community}>
      <h3 className={styles.title}>ВСТУПАЙ В НАШЕ СООБЩЕСТВО</h3>
      <h4 className={styles.subtitle}>И ДАВАЙ ЖАРИТЬ</h4>
      <a className={styles.link} href="mailto:oven@180degrees.com">
        oven@180degrees.com
      </a>
    </div>
  );
}
