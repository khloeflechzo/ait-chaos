import cn from 'classnames';
import React, { forwardRef, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface TypoLabelProps extends PropsWithChildren {
  color?: 'white' | 'black';
  size?: 40 | 32 | 28 | 16 | 14 | 12;
  weight?: 'bold' | 'medium' | 'normal';
  tag?: 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
}

const TypoLabel = forwardRef<HTMLHeadingElement, TypoLabelProps>((props: TypoLabelProps, ref) => {
  const {
    color = 'white',
    size = 12,
    weight = 'normal',
    tag: Tag = 'span',
    className,
    children,
    ...restProps
  } = props;

  const headingClassNames = cn(
    styles.label,
    color && styles[`label__${color}`],
    styles[`label__${size}`],
    styles[`label__${weight}`],
    className
  );
  return (
    <Tag {...restProps} ref={ref} className={headingClassNames}>
      {children}
    </Tag>
  );
});

TypoLabel.displayName = 'TypoLabel';

export default TypoLabel;
