import { Link } from 'react-scroll';

export const NavMenu = () => {
  return (
    <>
      <a href="">
        <Link to="targetSection" smooth={true} duration={500}>
          МАГАЗИН
        </Link>
      </a>

      <a href="">
        <Link to="targetSection" smooth={true} duration={500}>
          НАША ИСТОРИЯ
        </Link>
      </a>

      <a href="">
        <Link to="targetSection" smooth={true} duration={500}>
          КТО МЫ?
        </Link>
      </a>
    </>
  );
};
