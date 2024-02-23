import cn from 'classnames';
import React, { ReactElement } from 'react';

import s from './styles.module.scss';

interface IRareLabel {
  className?: string;
}

const RareLabel = ({ className }: IRareLabel): ReactElement => {
  return (
    <div className={cn(s.rare, className)}>
      <p className={s.rare_label}>epics</p>
    </div>
  );
};

export default RareLabel;
