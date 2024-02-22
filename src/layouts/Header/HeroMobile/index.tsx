import React, { ReactElement } from 'react';

import Soicals from '@/components/Socials';

import s from './styles.module.scss';

const HeroMobile = (): ReactElement => {
  return (
    <div className={s.header}>
      <div className={s.header_mobile_main}>
        <div>
          <a href="">STAKING</a>
        </div>
        <div>
          <a href="">OPEN BOX</a>
        </div>
        <Soicals />
      </div>
    </div>
  );
};

export default HeroMobile;
