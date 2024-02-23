import React, { ReactElement } from 'react';

import Address from '@/components/Address';
import Soicals from '@/components/Socials';

import CTA from '../../../components/CTA';
import s from './styles.module.scss';

const Bottom = (): ReactElement => {
  return (
    <div className={s.bottom_wrapper}>
      <div className={s.bottom}>
        <Address />
        <Soicals />
      </div>
      <CTA />
    </div>
  );
};

export default Bottom;
