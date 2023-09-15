import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartImg from '/public/images/cart.svg';
import styles from './styles.module.scss';
import { selectTotalPrice } from 'src/features/cartSlice/selector';

export const Basket = () => {
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <div>
      <Link to="/basket" className={styles.basket}>
        <img src={CartImg} alt="Basket" width={40} height={40} />
        <p>Корзина</p>
        {totalPrice > 0 && <p>{totalPrice}</p>}
      </Link>
    </div>
  );
};
