import React, { ReactElement } from 'react';

import Address from '@/components/Address';

import s from './styles.module.scss';
import TextBlock from './TextBlock';
import ThreeButtons from './ThreeButtons';
import TwoBuyButtons from './TwoBuyButton';

export default function LeftSide(): ReactElement {
  return (
    <div className={s.wrapper}>
      <TwoBuyButtons />
      <Address className={s.wrapper__address} />
      <ThreeButtons />
      <TextBlock />
    </div>
  );
}
