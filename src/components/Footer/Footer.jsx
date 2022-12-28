import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ProgressBar from '@ramonak/react-progress-bar';
import Typography from '../Typography/Typography';
import TypographyVariantsTypes from '../Typography/TypographyVariants.types';
import './Footer.scss';

function Footer({
  className,
  pageHeight,
  scrollNumber,
}) {
  const FooterClassName = classNames(
    'footer',
    className,
  );
  const completedNumber = Math.floor((scrollNumber / pageHeight) * 100);
  let page;
  return (
    <div className={FooterClassName}>
      <div className="footer__content-progress">
        <Typography
          variant={TypographyVariantsTypes.Regular_16_400_16}
          color="#ffffff"
        >
          {`0${page}`}
        </Typography>
        /
        {completedNumber === 100 ?
          <Typography
            variant={TypographyVariantsTypes.Regular_16_400_16}
            color="#ffffff"
          >
            Прокрути вниз
          </Typography>
        :
          <Typography
            variant={TypographyVariantsTypes.Regular_16_400_16}
            color="#ffffff"
          >
            Прокрути вверх
          </Typography>
        }
      </div>
      <div className="footer__progress-bar">
        <ProgressBar
          completed={completedNumber}
          baseBgColor="#A1A1A1"
          bgColor="#ffffff"
          width="270px"
          height="1px"
          borderRadius="1px"
          transitionDuration=".2s"
        />
      </div>
    </div>
  );
}

Footer.defaultProps = {
  className: '',
  pageHeight: null,
  scrollHeight: null,
};

Footer.propTypes = {
  className: PropTypes.string,
  pageHeight: PropTypes.number,
  scrollHeight: PropTypes.number,
};

export default Footer;
