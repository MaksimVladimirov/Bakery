import { Link } from 'react-router-dom';
import CartImg from '/public/images/cart.svg';

export const Basket = () => {
  return (
    <Link to="/basket">
      <img src={CartImg} alt="Basket" />
      <p>Cart</p>
    </Link>
  );
};
