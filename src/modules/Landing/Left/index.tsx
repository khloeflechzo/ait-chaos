import React, { ReactElement } from 'react';

import s from './styles.module.scss';
import ThreeButtons from './ThreeButtons';

export default function LeftSide(): ReactElement {
  return (
    <div className={s.wrapper}>
      <ThreeButtons />
    </div>
  );
}
