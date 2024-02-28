import cn from 'classnames';
import { isNil } from 'lodash';
import React, { ReactElement } from 'react';

import { ButtonProps } from '@/types/common';

// import ImagePreload from '../ImagePreload';
import SvgInsert from '../SvgInsert';
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
    <div onClick={onClick} className={buttonClasses}>
      <SvgInsert src={`/icons/buttons/corner.svg`} className={cn(s.corner, s.corner__left)} />
      <div className={s.button__slice}></div>
      <SvgInsert src={`/icons/buttons/corner.svg`} className={cn(s.corner, s.corner__right)} />
      <button className={s.button_content}>
        <TypoLabel color={textColor} className={s.label}>
          {label}
        </TypoLabel>
        {!isNil(child) && child}
      </button>
    </div>
  );
};

export default Button;
