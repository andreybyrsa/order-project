import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ColorsVariantsTypes from '../../assets/colors/ColorsVariants.types';
import IconsPaths from './IconsPaths';

import './Icon.scss';

function Icon({
  className,
  iconPath,
  size,
  color,
}) {
  const [translatePathY, setTranslatePathY] = useState(0);
  const [translatePathX, setTranslatePathX] = useState(0);
  const IconClassName = classNames(
    'icon',
    className,
  );
  let customSize;
  if (size) {
    customSize = {
      minWidth: `${size}px`,
      minHeight: `${size}px`,
      maxWidth: `${size}px`,
      maxHeight: `${size}px`,
    };
  }
  useEffect(() => {
    let currentPath;
    if (iconPath.props.children) {
      iconPath.props.children.forEach((elem) => {
        currentPath = document.getElementById(elem.props.id);
        setTranslatePathY(((24 - currentPath.getBBox().height) / 2) - currentPath.getBBox().y);
        setTranslatePathX(((24 - currentPath.getBBox().width) / 2) - currentPath.getBBox().x);
      })
    } else {
      currentPath = document.getElementById(iconPath.props.id);
      setTranslatePathY(( (24 - currentPath.getBBox().height) / 2 ) - currentPath.getBBox().y);
      setTranslatePathX(( (24 - currentPath.getBBox().width) / 2) - currentPath.getBBox().x);
    }
  }, [iconPath.props]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={IconClassName}
      style={customSize}
      color={color}
      viewBox={`${-translatePathX} ${-translatePathY} 24 24`}
      fill="none"
    >
      {iconPath}
    </svg>
  );
}

Icon.defaultProps = {
  className: '',
  iconPath: IconsPaths.tg,
  size: 24,
  color: ColorsVariantsTypes.White,
};

Icon.propTypes = {
  className: PropTypes.string,
  iconPath: PropTypes.oneOf(Object.values(IconsPaths)),
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
