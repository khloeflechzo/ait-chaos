import React, { ReactElement } from 'react';

import s from './styles.module.scss';

const RareLabel = (): ReactElement => {
  return (
    <div className={s.rare}>
      <p className={s.rare_label}>epics</p>
    </div>
  );
};

export default RareLabel;
