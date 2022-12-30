import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Typography/Typography';
import TypographyVariantsTypes from '../Typography/TypographyVariants.types';
import ButtonTypesTypes from './ButtonTypes.types';
import ColorsVariantsTypes from '../../assets/colors/ColorsVariants.types';

import './Button.scss';

function Button({
  className,
  children,
  variant,
  onClick,
}) {
  const ButtonClassName = classNames(
    'button',
    `button-${variant}`,
    className,
  );
  return (
    <button onClick={onClick} className={ButtonClassName}>
      {
        children === PropTypes.string ?
          <Typography
            color={ColorsVariantsTypes.Black}
            variant={TypographyVariantsTypes.Regular_16_400_16}
          >
            {children}
          </Typography>
        :
          children
      }
    </button>
  );
}

Button.defaultProps = {
  className: '',
  children: null,
  variant: ButtonTypesTypes.Primary,
  onClick: () => null,
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.oneOf(Object.values(ButtonTypesTypes)),
  onClick: PropTypes.func,
};

export default Button;
