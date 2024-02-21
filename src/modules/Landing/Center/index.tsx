import React, { ReactElement } from 'react';

import s from './styles.module.scss';
import WrapperBox from './WrapperBox';

const Center = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <WrapperBox></WrapperBox>
    </div>
  );
};

export default Center;
