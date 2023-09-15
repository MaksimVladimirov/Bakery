import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, selectTotalPrice } from 'src/features/cartSlice/selector';
import { useAppSelector } from 'src/features/userSlice/hooks/redux-hooks';
import { clearItems, minusItem, plusItem, removeItem } from 'src/features/cartSlice';
import { EmptyBasket } from 'src/widgets/empty-basket';
import { BackToStartPageButton } from 'src/shared/back-to-start-page-button';
import Minus from '/public/images/basket/minus.svg';
import Plus from '/public/images/basket/plus.svg';
import Trash from '/public/images/basket/remove.svg';

import styles from './styles.module.scss';

const BasketPage = () => {
  const products = useAppSelector(selectProducts);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems());
    }
  };
  console.log('Component rerendered');
  const onClickMinus = (id: number) => {
    dispatch(minusItem(id));
  };

  const onClickPlus = (id: number) => {
    dispatch(plusItem(id));
  };

  const onClickRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  if (products.length) {
    return (
      <section>
        <h3> Корзина</h3>
        {products.map(({ id, name, count, price, img }) => (
          <div className={styles.container} key={id}>
            <img className={styles.image} src={img} />
            <div className={styles.description}>
              <p className={styles.name}>{name}</p>
              <p className={styles.price}>Цена за 5 штук {price} руб.</p>
              <div className={styles.button}>
                {count > 1 ? (
                  <img src={Minus} className={styles.minus_button} onClick={() => onClickMinus(id)} />
                ) : (
                  <img src={Trash} className={styles.remove_button} onClick={() => onClickRemove(id)} />
                )}
                <div className={styles.count}> {count}</div>

                <img src={Plus} className={styles.plus_button} onClick={() => onClickPlus(id)} />
              </div>
            </div>
          </div>
        ))}
        <p> Общая сумма составляет {totalPrice}</p>
        <button className={styles.remove_items__button} onClick={onClickClear}>
          Удалить все товары с корзины
        </button>
        <BackToStartPageButton />
      </section>
    );
  } else {
    return <EmptyBasket />;
  }
};

export default BasketPage;
