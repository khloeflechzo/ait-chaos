import React, { ReactElement } from 'react';

import s from './styles.module.scss';

const BuildOn = (): ReactElement => {
  return (
    <div className={s.build_on}>
      <p>Built on #ERC-404</p>
    </div>
  );
};

export default BuildOn;
