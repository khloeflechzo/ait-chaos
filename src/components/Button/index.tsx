import cn from 'classnames';
import { isNil } from 'lodash';
import React, { ReactElement } from 'react';

import { ButtonProps } from '@/types/common';

import { TypoLabel } from '../Typo';
import s from './styles.module.scss';

interface IButtonProps extends ButtonProps {
  onClick?: () => void;
  classess?: string;
}

const Button = ({
  bgColor = 'black',
  textColor = 'white',
  onClick,
  classess = '',
  child,
  label,
}: IButtonProps): ReactElement => {
  const buttonClasses = cn(s.button, s[`button__${bgColor}`], classess);
  return (
    <div className={s.wrapper}>
      <div onClick={onClick} className={buttonClasses}>
        <div className={s.button__slice}>
          <div className={s.button__slice_bg}></div>
        </div>
        <button className={s.button_content}>
          <TypoLabel color={textColor} className={s.label}>
            {label}
          </TypoLabel>
          {!isNil(child) && child}
        </button>
      </div>
    </div>
  );
};

export default Button;
