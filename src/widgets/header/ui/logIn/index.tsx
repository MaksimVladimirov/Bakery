import { Link } from 'react-router-dom';
import PersonImg from '/public/images/person.svg';

export const LogIn = () => {
  return (
    <Link to="/autorizathion">
      <img src={PersonImg} alt="Person" />
      <p>Log in</p>
    </Link>
  );
};
