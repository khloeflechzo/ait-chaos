import cn from 'classnames';
import { isNil } from 'lodash';
import Image from 'next/image';
import React, { ReactElement, ReactNode } from 'react';

import { TypoLabel } from '../Typo';
import s from './styles.module.scss';

interface IButtonProps {
  onClick?: () => void;
  bgColor?: 'white' | 'black';
  textColor?: 'white' | 'black';
  classess?: string;
  text: string;
  icon?: ReactElement | ReactNode;
}

const Button = ({
  bgColor = 'black',
  textColor = 'white',
  onClick,
  classess = '',
  text,
  icon,
}: IButtonProps): ReactElement => {
  const buttonClasses = cn(s.button, s[`button__${bgColor}`], classess);
  return (
    <button onClick={onClick} className={buttonClasses}>
      <div className={s.button_content}>
        <TypoLabel color={textColor} size={12} className={s.label}>
          {text}
        </TypoLabel>
        {!isNil(icon) && icon}
        <Image
          src="/images/button-wrapper.png"
          fill
          alt="button-wrapper"
          className={s.button_wrapper}
        />
      </div>
    </button>
  );
};

export default Button;
