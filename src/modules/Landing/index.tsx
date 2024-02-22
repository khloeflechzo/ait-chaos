import React from 'react';

import Center from './Center';
import LeftSide from './Left';
import Right from './Right';
import s from './style.module.scss';

const LandingPage = (): React.ReactElement => {
  return (
    <div className={`container ${s.main_wrapper}`}>
      <LeftSide />
      <Center />
      <Right />
    </div>
  );
};

export default LandingPage;
