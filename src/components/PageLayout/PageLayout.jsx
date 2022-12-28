import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './PageLayout.scss';

function PageLayout({
  className,
  headerClassName,
  contentClassName,
  footerClassName,
  header,
  children,
  footer,
}) {
  const PageLayoutClassName = classNames(
    'page-layout',
    className,
  );
  const PageLayoutHeaderClassName = classNames(
    'page-layout__header',
    headerClassName,
  );
  const PageLayoutContentClassName = classNames(
    'page-layout__content',
    contentClassName,
  );
  const PageLayoutFooterClassName = classNames(
    'page-layout__footer',
    footerClassName,
  );
  return (
    <div className={PageLayoutClassName}>
      <div className={PageLayoutHeaderClassName}>
        {header}
      </div>
      <div className={PageLayoutContentClassName}>
        {children}
      </div>
      <div className={PageLayoutFooterClassName}>
        {footer}
      </div>
    </div>
  );
}

PageLayout.defaultProps = {
  className: '',
  headerClassName: '',
  contentClassName: '',
  footerClassName: '',
  header: null,
  children: null,
  footer: null,
};

PageLayout.propTypes = {
  className: PropTypes.string,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  footerClassName: PropTypes.string,
  header: PropTypes.element,
  children: PropTypes.element,
  footer: PropTypes.element,
};

export default PageLayout;
