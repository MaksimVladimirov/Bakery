import BakeryComponent from './productCard/ProductCard';
import styles from './styles.module.scss';

const Products = () => {
  return (
    <section className={styles.products}>
      <h2 className={styles.title}>Кондитерские изделия</h2>
      <BakeryComponent />
    </section>
  );
};

export default Products;
