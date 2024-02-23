import React, { ReactElement } from 'react';

import Address from '@/components/Address';
import Soicals from '@/components/Socials';

import CTA from './CTA';
import RareLabel from './RareLabel';
import s from './styles.module.scss';

const Right = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <Address />
      <RareLabel />
      <CTA />
      <Soicals />
    </div>
  );
};

export default Right;
