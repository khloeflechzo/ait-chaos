import React, { ReactElement } from 'react';

import { TypoLabel } from '../Typo';
import s from './styles.module.scss';

const MTE = (): ReactElement => {
  return (
    <div className={s.mte}>
      <TypoLabel color="black" size={28}>
        Mint-Transfer-Earn
      </TypoLabel>
    </div>
  );
};

export default MTE;
