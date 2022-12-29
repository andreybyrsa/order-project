import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '../Typography/Typography';
import TypographyVariantsTypes from '../Typography/TypographyVariants.types';
import { tg, be, vk } from '../../assets/images';
import './Header.scss';

const links = [
  {id: 1, text: 'Создание сайтов'},
  {id: 2, text: 'Продвижение'},
  {id: 3, text: 'SMM'},
  {id: 4, text: 'Тех. поддержка'},
  {id: 5, text: 'Кейсы'},
  {id: 6, text: 'Портфолио'},
  {id: 7, text: 'Контакты'},
];

function Header({
  className,
}) {
  const HeaderClassName = classNames(
    'header',
    className,
  );
  return (
    <div className={HeaderClassName}>
      <div className="header-content__wrapper">
        <div className="header__navigation">
          <div className="header__navigation-logo">
            <Typography
              variant={TypographyVariantsTypes.Heading_logo}
            >
              IT CLAN
            </Typography>
          </div>
          <div className="header__navigation-links">
            {links.map((elem) => {
              return (
                <Typography
                  className="header__navigation-link"
                  key={elem.id}
                  variant={TypographyVariantsTypes.Regular_16_400_16}
                >
                  {elem.text}
                </Typography>
              );
            })}
          </div>
        </div>
        <div className="header__icons">
          <img className="header__icon" src={tg} alt="tg"/>
          <img className="header__icon" src={be} alt="be"/>
          <img className="header__icon" src={vk} alt="vk"/>
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
