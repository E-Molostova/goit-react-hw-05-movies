import s from './Footer.module.css';
import sprite from '../../images/sprite.svg';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <span>
        &#169; 2021 | All Rights Reserved | Developed with &ensp;
        <svg width="14" height="14">
          <use href={sprite + '#icon-heart'}></use>
        </svg>
        &ensp; by GoIT Student Molostova Elena
      </span>
    </footer>
  );
};

export default Footer;
