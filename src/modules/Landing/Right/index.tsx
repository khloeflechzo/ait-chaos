import React, { ReactElement } from 'react';

import Address from './Address';
import CTA from './CTA';
import RareLabel from './RareLabel';
import s from './styles.module.scss';

const Right = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <Address />
      <RareLabel />
      <CTA />
    </div>
  );
};

export default Right;
