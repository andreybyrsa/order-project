import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '../Typography/Typography';
import TypographyVariantsTypes from '../Typography/TypographyVariants.types';
import Icon from '../Icon/Icon';

import './LineGroup.scss';

function LineGroup({
  className,
  cells,
}) {
  const LineGroupClassName = classNames(
    'line-group',
    className,
  );
  const CellClassName = classNames(
    'line-group__cell',
    {
      'line-group__cell--no-separate': cells.length === 1,
    },
  );
  return (
    <div className={LineGroupClassName}>
      {cells.map((elem) => {
        let CellBorderClassName = '';
        if (cells.length > 1) {
          if (cells[0] === elem) {
            CellBorderClassName = 'first--cell';
          }
          if (cells[cells.length - 1] === elem) {
            CellBorderClassName = 'last--cell'
          }
        }
        const CellContent = (
          <>
            <Icon className="line-group__cell-icon" iconPath={elem.icon} color={elem.color}/>
            <Typography
              variant={TypographyVariantsTypes.Regular_14_400_14}
            >
              {elem.text}
            </Typography>
          </>
        );
        return (
          <div key={elem.id} className={`${CellClassName} ${CellBorderClassName}`}>
            {elem.to ?
              <a className="line-group__cell-link" href={elem.to}>{CellContent}</a>
            :
              CellContent
            }
          </div>
        );
      })}
    </div>
  );
}

LineGroup.defaultProps = {
  className: '',
  cells: [],
};

LineGroup.propTypes = {
  className: PropTypes.string,
  cells: PropTypes.array,
};

export default LineGroup;
