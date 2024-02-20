'use client';

import React, { PropsWithChildren } from 'react';

import s from './styles.module.scss';

interface IBoxParallax extends PropsWithChildren {
  className?: string;
}

export default function BoxParallaxLite({ children, className }: IBoxParallax): React.ReactElement {
  return (
    <div className={`${s.boxparallax} ${className}`}>
      <div className={s.boxparallax_inner}>{children}</div>
    </div>
  );
}
