import { Link } from 'react-router-dom';
import CartImg from '/public/images/cart.svg';
import styles from './styles.module.scss'

export const Basket = () => {
  return (
    <Link to="/basket" className={styles.basket}>
      <img src={CartImg} alt="Basket" width={40} height={40} />
      <p>Cart</p>
    </Link>
  );
};
