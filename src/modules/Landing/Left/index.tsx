'use client';

import React, { ReactElement } from 'react';

import Address from '@/components/Address';
import useWindowResize from '@/hooks/useWindowResize';

import s from './styles.module.scss';
import TextBlock from './TextBlock';
import ThreeButtons from './ThreeButtons';
import TwoBuyButtons from './TwoBuyButton';

export default function LeftSide(): ReactElement {
  const { isMobile } = useWindowResize();

  return (
    <div className={s.wrapper}>
      <TwoBuyButtons />
      {isMobile && <Address />}
      <ThreeButtons />
      <TextBlock />
    </div>
  );
}
