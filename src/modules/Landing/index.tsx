import React from 'react';

import LeftSide from './Left';
import s from './style.module.scss';

const LandingPage = (): React.ReactElement => {
  return (
    <div className={`container ${s.main_wrapper}`}>
      <LeftSide />
    </div>
  );
};

export default LandingPage;
