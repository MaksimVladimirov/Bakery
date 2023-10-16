import { observer } from 'mobx-react';
import { BakeryInfo } from 'src/types/bakery-info';
import StarImg from '/public/images/star.svg';
import styles from './styles.module.scss';
import { useFetchBakeryQuery } from 'src/features/fetch-bakery';
import cartStore from 'src/app/store/store';

const BakeryComponent = observer(() => {
  const { data: bakeryData, isLoading, isError } = useFetchBakeryQuery({});

  const addProduct = ({ img, name, price, id, bestseller }: BakeryInfo) => {
    const product = {
      img,
      name,
      price,
      id,
      bestseller,
      count: 1,
    };

    cartStore.addItem(product);
  };

  return (
    <div className={styles.container}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {bakeryData && (
        <>
          {bakeryData.map((item: BakeryInfo) => (
            <div key={item.id} className={styles.card_container}>
              {item.bestseller && <img src={StarImg} className={styles.star} alt="Bestseller" />}
              <img className={styles.image} src={item.img} alt={item.name} />
              <p className={styles.title}>{item.name}</p>
              <p className={styles.price}>
                Цена 5 штук: <i>{item.price}</i> ₽
              </p>
              <button
                className={styles.button}
                onClick={() => {
                  addProduct(item);
                }}
              >
                {cartStore.items.find((object) => object.id === item.id)?.count === undefined
                  ? 'Добавить в корзину'
                  : 'Уже в корзине'}
              </button>
              <span>
                {cartStore.items.find((object) => object.id === item.id)?.count === undefined
                  ? ''
                  : cartStore.items.find((object) => object.id === item.id)?.count}
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  );
});

export default BakeryComponent;
