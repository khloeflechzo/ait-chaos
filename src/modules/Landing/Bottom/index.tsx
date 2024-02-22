import React, { ReactElement } from 'react';

import Address from '@/components/Address';
import Soicals from '@/components/Socials';

import s from './styles.module.scss';

const Bottom = (): ReactElement => {
  return (
    <div className={s.bottom}>
      <Address />
      <Soicals />
    </div>
  );
};

export default Bottom;
