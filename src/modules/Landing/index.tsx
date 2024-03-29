import React from 'react';

import Fade from '@/interactive/Fade';

import Bottom from './Bottom';
import Center from './Center';
import LeftSide from './Left';
import Right from './Right';
import s from './style.module.scss';

const LandingPage = (): React.ReactElement => {
  return (
    <div className={`container ${s.main_wrapper}`}>
      <div className={s.content}>
        <Fade direction="left">
          <LeftSide />
        </Fade>
        <Center />
        <Fade direction="right">
          <Right />
        </Fade>
      </div>
      <Fade direction="bottom">
        <Bottom />
      </Fade>
    </div>
  );
};

export default LandingPage;
