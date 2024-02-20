import cn from 'classnames';
import React, { ReactElement } from 'react';

import { TypoParagraph } from '../Typo';
import s from './styles.module.scss';

interface IButtonProps {
  onClick?: () => void;
  bgColor?: 'purple' | 'neutral' | 'black';
  classess?: string;
  text: string;
}

const Button = ({
  bgColor = 'neutral',
  onClick,
  classess = '',
  text,
}: IButtonProps): ReactElement => {
  const buttonClasses = cn(s.button, s[`button__${bgColor}`], classess);
  return (
    <button onClick={onClick} className={buttonClasses}>
      <TypoParagraph color="white" size={16} className={s.label}>
        {text}
      </TypoParagraph>
    </button>
  );
};

export default Button;
