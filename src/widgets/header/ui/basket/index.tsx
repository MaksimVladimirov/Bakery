import { Link } from 'react-router-dom';

import CartImg from '/public/images/cart.svg';
import styles from './styles.module.scss';
import cartStore from 'src/app/store/store';
import { observer } from 'mobx-react';

export const Basket = observer(() => {
  return (
    <div>
      <Link to="/basket" className={styles.basket}>
        <img src={CartImg} alt="Basket" width={40} height={40} />
        <p>Корзина</p>
        {cartStore.totalPrice > 0 && <p>{cartStore.totalPrice}</p>}
      </Link>
    </div>
  );
});
