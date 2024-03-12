import cn from 'classnames';
import React, { forwardRef, PropsWithChildren } from 'react';

import styles from './styles.module.scss';

interface TypographyProps extends PropsWithChildren {
  color?: 'white' | 'black' | 'silver' | 'gray' | 'neutral_light';
  size?: 48 | 32 | 24 | 21 | 20 | 18 | 16 | 14;
  className?: string;
}

const TypoParagraph = forwardRef<HTMLParagraphElement, TypographyProps>(
  (props: TypographyProps, ref) => {
    const { color, size = 24, className, children, ...restProps } = props;
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

TypoParagraph.displayName = 'TypoParagraph';

export default TypoParagraph;
