import React, { ReactElement } from 'react';

import BuildOn from '@/components/BuildOn';
import BuyAndAddress from '@/components/BuyAndAddress';
import MTE from '@/components/MTE';
import Soicals from '@/components/Socials';

import CTA from '../../../components/CTA';
import s from './styles.module.scss';

const Right = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <BuyAndAddress />
      <CTA />
      <Soicals />
      <div className={s.wrapper_mteb}>
        <MTE />
        <BuildOn />
      </div>
    </div>
  );
};

export default Right;
