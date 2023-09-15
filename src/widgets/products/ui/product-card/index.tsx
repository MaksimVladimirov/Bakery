import { BakeryInfo } from 'src/types/bakery-info';
import StarImg from '/public/images/star.svg';

import styles from './styles.module.scss';
import { useFetchBakeryQuery } from 'src/features/fetch-bakery';
import { useDispatch } from 'react-redux';
import { addItem } from 'src/features/cartSlice';

function BakeryComponent() {
  const dispatch = useDispatch();
  const { data: bakeryData, isLoading, isError } = useFetchBakeryQuery({});

  const addProduct = (img: string, name: string, price: number, id: number, bestseller: boolean) => {
    const product = {
      img,
      name,
      price,
      id,
      bestseller,
      count: 0,
    };

    dispatch(addItem(product));
  };

  return (
    // TODO: skeleton
    <div className={styles.container}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {bakeryData && (
        <>
          {bakeryData.map(({ img, name, price, id, bestseller }: BakeryInfo) => (
            <div key={id} className={styles.card_container}>
              {bestseller && <img src={StarImg} className={styles.star} alt="Bestseller" />}
              <img className={styles.image} src={img} alt={name} />
              <p className={styles.title}>{name}</p>
              <p className={styles.price}>
                Цена 5 штук: <i>{price}</i> ₽
              </p>
              <button
                className={styles.button}
                onClick={() => {
                  addProduct(img, name, price, id, bestseller);
                }}
              >
                Добавить в корзину
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default BakeryComponent;
