import React, { ReactElement } from 'react';

import Button from '@/components/Button';
import { twoButtonsData } from '@/constants/datas/contents';

import s from './styles.module.scss';

const TwoBuyButtons = (): ReactElement => {
  return (
    <div className={s.two}>
      {twoButtonsData.map((dt) => (
        <Button
          label={dt.label}
          textColor="black"
          bgColor={dt.bgColor}
          key={dt.label + dt.bgColor}
          child={dt.child}
        />
      ))}
    </div>
  );
};

export default TwoBuyButtons;
