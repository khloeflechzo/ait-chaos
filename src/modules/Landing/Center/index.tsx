import React, { ReactElement } from 'react';

import RareLabel from '@/components/RareLabel';

import Cubes from './Cubes';
import s from './styles.module.scss';
import WrapperBox from './WrapperBox';

const Center = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <WrapperBox>
        <Cubes />
        <RareLabel className={s.rarelabel} />
      </WrapperBox>
    </div>
  );
};

export default Center;
