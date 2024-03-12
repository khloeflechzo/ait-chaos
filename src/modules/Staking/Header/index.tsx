import Image from 'next/image';
import React, { ReactElement } from 'react';

import { TypoLabel } from '@/components/Typo';

import s from './styles.module.scss';

const Header = (): ReactElement => {
  return (
    <div className={s.header}>
      <Image width={19} height={14} src="/icons/buttons/union.svg" alt="union" />
      <TypoLabel size={40} weight="normal" color="white">
        STAKING
      </TypoLabel>
      <Image width={19} height={14} src="/icons/buttons/union.svg" alt="union" />
    </div>
  );
};

export default Header;
