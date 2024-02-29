import React, { ReactElement } from 'react';

import Button from '@/components/Button';

import s from './styles.module.scss';

const HeroMobile = (): ReactElement => {
  return (
    <div className={s.header}>
      <div className={s.header_mobile_main}>
        <Button bgColor="black" label="STAKING" />
        <Button bgColor="black" label="OPEN BOX" />
      </div>
    </div>
  );
};

export default HeroMobile;
