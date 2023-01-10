import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.scss';

function Image({
  className,
  imageSrc,
  size,
  width,
  height,
  borderRadius,
  objectFit,
  alt,
  to,
}) {
  const ImageClassName = classNames(
    'image',
    className,
  );
  let customStyle;
  if (width || height) {
    customStyle = {
      minWidth: `${width}px`,
      maxWidth: `${width}px`,
      minHeight: `${height}px`,
      maxHeight: `${height}px`,
    };
  } else if (size) {
    customStyle = {
      minWidth: `${size}px`,
      maxWidth: `${size}px`,
      minHeight: `${size}px`,
      maxHeight: `${size}px`,
    };
  }
  let ImageWrapper = 'div';
  if (to) {
    ImageWrapper = 'a';
  }
  return (
    <ImageWrapper
      className={ImageClassName}
      href={to}
    >
      <img
        style={{...customStyle, borderRadius: `${borderRadius}px`, objectFit: objectFit}}
        src={imageSrc}
        alt={alt}
        loading="lazy"
      />
    </ImageWrapper>
  );
}

Image.defaultProps = {
  className: '',
  imageSrc: '',
  size: null,
  width: null,
  height: null,
  borderRadius: 0,
  objectFit: 'contain',
  alt: 'img',
  to: '',
};

Image.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  objectFit: PropTypes.oneOf([
    'cover',
    'contain',
    'fill',
    'none',
    'scale-down',
  ]),
  alt: PropTypes.string,
  to: PropTypes.string,
};

export default Image;
