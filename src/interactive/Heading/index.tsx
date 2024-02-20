import React from 'react';

interface IHeadingInteractive {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div';
  children: React.ReactNode | string;
}

const elementMap: Record<IHeadingInteractive['as'], string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  div: 'div',
  p: 'p',
};

type HeadingInteractiveProps = IHeadingInteractive & React.HTMLProps<HTMLElement>;

export default function HeadingInteractive({
  as,
  children,
  ...restProps
}: HeadingInteractiveProps): React.ReactElement {
  const Element = elementMap[as] || 'h4';
  return <Element {...restProps}>{children}</Element>;
}
