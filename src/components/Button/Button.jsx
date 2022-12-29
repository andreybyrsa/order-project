import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Typography/Typography';
import TypographyVariantsTypes from '../Typography/TypographyVariants.types';
import './Button.scss';

function Button({
  className,
  children,
  onClick,
}) {
  const ButtonClassName = classNames(
    'button',
    className,
  );
  return (
    <button onClick={onClick} className={ButtonClassName}>
      <Typography variant={TypographyVariantsTypes.Regular_16_400_16} color="#000000">
        {children}
      </Typography>
    </button>
  );
}

Button.defaultProps = {
  className: '',
  children: null,
  onClick: () => null,
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
