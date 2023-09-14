import { BakeryInfo } from 'src/types/bakeryInfo';
import { AddToCardButton } from '../add-to-card-button';
import StarImg from '/public/images/star.svg';

import styles from './styles.module.scss';
import { useFetchBakeryQuery } from 'src/features/fetchBakery';

function BakeryComponent() {
  const { data: bakeryData, isLoading, isError } = useFetchBakeryQuery({});

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
              <AddToCardButton />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default BakeryComponent;
