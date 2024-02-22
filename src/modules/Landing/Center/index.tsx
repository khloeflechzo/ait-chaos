import React, { ReactElement } from 'react';

import Cubes from './Cubes';
import s from './styles.module.scss';
import WrapperBox from './WrapperBox';

const Center = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <WrapperBox>
        <Cubes />
      </WrapperBox>
    </div>
  );
};

export default Center;
