import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '../Typography/Typography';
import TypographyVariantsTypes from '../Typography/TypographyVariants.types';
import ColorsVariantsTypes from '../../assets/colors/ColorsVariants.types';
import Image from '../Image/Image';
import ImagesSources from '../Image/ImagesSources';

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
              BALDR.
            </Typography>
            <Typography
              variant={TypographyVariantsTypes.Heading_logo}
            >
              AGENCY
            </Typography>
          </div>
          <div className="header__navigation-links">
            {links.map((elem) => {
              return (
                <Typography
                  className="header__navigation-link"
                  color={ColorsVariantsTypes.White}
                  key={elem.id}
                >
                  {elem.text}
                </Typography>
              );
            })}
          </div>
        </div>
        <div className="header__icons">
          <Image className="header__icon" imageSrc={ImagesSources.tg} />
          <Image className="header__icon" imageSrc={ImagesSources.vk} />
          <Image className="header__icon" imageSrc={ImagesSources.be} />
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
