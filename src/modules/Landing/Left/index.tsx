import React, { ReactElement } from 'react';

import BuyAndAddress from '@/components/BuyAndAddress';

import s from './styles.module.scss';
import TextBlock from './TextBlock';
import ThreeButtons from './ThreeButtons';

export default function LeftSide(): ReactElement {
  return (
    <div className={s.wrapper}>
      <BuyAndAddress adddressClass={s.wrapper__address} />
      <ThreeButtons />
      <TextBlock />
    </div>
  );
}
