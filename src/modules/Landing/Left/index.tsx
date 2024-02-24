import React, { ReactElement } from 'react';

import s from './styles.module.scss';
import TextBlock from './TextBlock';
import ThreeButtons from './ThreeButtons';
import TwoBuyButtons from './TwoBuyButton';

export default function LeftSide(): ReactElement {
  return (
    <div className={s.wrapper}>
      <TwoBuyButtons />
      <ThreeButtons />
      <TextBlock />
    </div>
  );
}
