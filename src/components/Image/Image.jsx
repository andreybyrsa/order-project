import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.scss';

function Image({
  className,
  wrapperClassName,
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
  const ImageWrapperClassName = classNames(
    'image-wrapper',
    wrapperClassName,
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
      className={ImageWrapperClassName}
      href={to}
    >
      <img
        className={ImageClassName}
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
  wrapperClassName: '',
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
  wrapperClassName: PropTypes.string,
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
