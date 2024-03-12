import React, { ReactElement } from 'react';

import Cards from './Cards';
import Header from './Header';
import s from './styles.module.scss';

const Staking = (): ReactElement => {
  return (
    <div className={s.staking}>
      <div className="container">
        <div className={s.staking_wrapper}>
          <Header />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Staking;
