import { BackToStartPageButton } from 'src/shared/back-to-start-page-button';
import styles from './styles.module.scss';

export const EmptyBasket = () => {
  return (
    <section className={styles.empty_basket}>
      <div className={styles.container}>
        <h2>Корзина пуста 😔</h2>
       <BackToStartPageButton/>
      </div>
    </section>
  );
};
