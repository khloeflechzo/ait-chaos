import React from 'react';

import Center from './Center';
import LeftSide from './Left';
import s from './style.module.scss';

const LandingPage = (): React.ReactElement => {
  return (
    <div className={`container ${s.main_wrapper}`}>
      <LeftSide />
      <Center />
      {/* temp */}
      <div
        style={{
          background: 'white',
          width: '31.6rem',
          height: '100%',
        }}
      ></div>
    </div>
  );
};

export default LandingPage;
