import cn from 'classnames';
import React, { forwardRef, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface TypographyProps extends PropsWithChildren {
  color?: 'silver' | 'black' | 'white';
  size?: 16 | 12;
  className?: string;
}

const TypoLink = forwardRef<HTMLParagraphElement, TypographyProps>(
  (props: TypographyProps, ref) => {
    const { color = 'silver', size = 16, className, children, ...restProps } = props;
    const paragraphClassNames = cn(
      styles.paragraph,
      color && styles[`paragraph__${color}`],
      styles[`paragraph__${size}`],
      className
    );
    return (
      <p {...restProps} ref={ref} className={paragraphClassNames}>
        {children}
      </p>
    );
  }
);

TypoLink.displayName = 'TypoLink';

export default TypoLink;
