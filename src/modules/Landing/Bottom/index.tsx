import React, { ReactElement } from 'react';

import BuyAndAddress from '@/components/BuyAndAddress';
import Soicals from '@/components/Socials';
import ThreeButtons from '@/components/ThreeButtons';

import CTA from '../../../components/CTA';
import s from './styles.module.scss';

const Bottom = (): ReactElement => {
  return (
    <div className={s.bottom_wrapper}>
      <div className={s.bottom}>
        <BuyAndAddress adddressClass={s.bottom__addrees} />
        <div className={s.bottom_right}>
          <ThreeButtons />
          <Soicals />
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default Bottom;
