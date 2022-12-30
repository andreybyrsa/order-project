import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import InputVariantsTypesTypes from './InputVariantsTypes.types';
import Typography from '../Typography/Typography';
import { Check, X } from 'react-feather';
import './Input.scss';

function Input({
  className,
  type,
  label,
  placeHolder,

  minLength,
  maxLength,
}) {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    mode: 'onChange',
  });
  const InputClassName = classNames(
    'input',
    className,
  );
  const getInitialState = () => {
    setValue('Phone','+7');
  }
  return (
    <div className="input-wrapper">
      {label &&
        <Typography
          className="input-label"
        >
          {label}
        </Typography>
      }
      {type === InputVariantsTypesTypes.Text ?
        <div className="input-content">
          <input
            className={InputClassName}
            type="text"
            placeholder={placeHolder}
            {...register('Text', {
              minLength: minLength,
              maxLength: maxLength,
            })}
          />
          {errors?.Text ?
            <X className="input-icon" color="#ffffff" size={20} />
          : !!getValues('Text') === false ?
            <div className="input-icon empty" />
          :
            <Check className="input-icon" color="#ffffff" size={20} />
          }
        </div>
      : type === InputVariantsTypesTypes.Phone ?
        <div className="input-content">
          <input
            className={InputClassName}
            type="tel"
            placeholder={placeHolder}
            onFocus={getInitialState}
            {...register('Phone', {
              minLength: 11,
              pattern: /^(\+7|7|8)?\(?[489][0-9]{2}\)?[0-9]{3}?[0-9]{2}?[0-9]{2}$/,
            })}
          />
          {errors?.Phone ?
            <X className="input-icon" color="#ffffff" size={20} />
          : !!getValues('Phone') === false ?
            <div className="input-icon empty" />
          :
            <Check className="input-icon" color="#ffffff" size={20} />
          }
        </div>
      :
        <div className="input-content">
          <input
            className={InputClassName}
            type="tel"
            placeholder={placeHolder}
            {...register('Email', {
              pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
          />
          {errors?.Email ?
            <X className="input-icon" color="#ffffff" size={20} />
          : !!getValues('Email') === false ?
            <div className="input-icon empty" />
          :
            <Check className="input-icon" color="#ffffff" size={20} />
          }
        </div>
      }
    </div>
  );
}

Input.defaultProps = {
  className: '',
  type: 'text',
  label: '',
  placeHolder: '',
  minLength: null,
  maxLength: null,
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

export default Input;
