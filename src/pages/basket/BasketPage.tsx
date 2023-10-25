import { EmptyBasket } from 'src/widgets/emptyBasket/EmptyBasket';
import { BackToStartPageButton } from 'src/shared/backToStartPageButton/BackToStartPageButton';
import Minus from '/public/images/basket/minus.svg';
import Plus from '/public/images/basket/plus.svg';
import Trash from '/public/images/basket/remove.svg';

import styles from './styles.module.scss';
import cartStore from 'src/features/cartStore/cartStore';
import { observer } from 'mobx-react';
import { BakeryInfo } from 'src/types/bakery-info/bakeryInfo';

const BasketPage = observer(() => {
  const handleClearBasket = () => {
    if (window.confirm('Очистить корзину?')) {
      cartStore.clearItems();
    }
  };

  const handleRemoveItem = (item: BakeryInfo) => {
    if (window.confirm('Товар будет удален с корзины, вы уверены?')) {
      cartStore.removeItem(item);
    }
  };

  if (cartStore.items.length) {
    return (
      <section>
        <h3> Корзина</h3>
        {cartStore.items.map((item) => (
          <div className={styles.container} key={item.id}>
            <img className={styles.image} src={item.img} />
            <div className={styles.description}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>Цена за 5 штук {item.price} руб.</p>
              <div className={styles.button}>
                {item.count && item.count > 1 ? (
                  <img src={Minus} className={styles.minus_button} onClick={() => cartStore.minusItem(item)} />
                ) : (
                  <img src={Trash} className={styles.remove_button} onClick={() => handleRemoveItem(item)} />
                )}
                <div className={styles.count}> {item.count}</div>

                <img src={Plus} className={styles.plus_button} onClick={() => cartStore.plusItem(item)} />
              </div>
            </div>
          </div>
        ))}
        <p> Общая сумма составляет {cartStore.totalPrice}</p>
        <button className={styles.remove_items__button} onClick={handleClearBasket}>
          Удалить все товары с корзины
        </button>
        <BackToStartPageButton />
      </section>
    );
  } else {
    return <EmptyBasket />;
  }
});

export default BasketPage;
