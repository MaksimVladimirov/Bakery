import { Link } from 'react-router-dom';
import Image from '/public/images/logo.svg';

export const Logo = () => {
  return (
    <Link to="/">
      <img src={Image} width={140} height={55} alt="Tarla" />
    </Link>
  );
};
