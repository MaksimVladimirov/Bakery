import BakeryComponent from './product-card';
import styles from './styles.module.scss';

const Products = () => {
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Shop pastry kits</h2>
      <BakeryComponent />
    </section>
  );
};

export default Products;
