import React, { ReactElement } from 'react';

import BuyAndAddress from '@/components/BuyAndAddress';
import RareLabel from '@/components/RareLabel';

import Cubes from './Cubes';
import s from './styles.module.scss';
import WrapperBox from './WrapperBox';

const Center = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <BuyAndAddress />
      <WrapperBox>
        <Cubes />
        <RareLabel className={s.rarelabel} />
      </WrapperBox>
    </div>
  );
};

export default Center;
