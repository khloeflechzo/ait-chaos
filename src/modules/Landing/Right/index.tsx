import React, { ReactElement } from 'react';

import BuyAndAddress from '@/components/BuyAndAddress';
import Soicals from '@/components/Socials';

import CTA from '../../../components/CTA';
import s from './styles.module.scss';

const Right = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <BuyAndAddress />
      <CTA />
      <Soicals />
    </div>
  );
};

export default Right;
