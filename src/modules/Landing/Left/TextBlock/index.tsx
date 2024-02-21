import React, { ReactElement } from 'react';

import { TextBlockValue } from '@/constants/datas/contents';

import s from './styles.module.scss';

const TextBlock = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <p>
        {TextBlockValue.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </p>
    </div>
  );
};

export default TextBlock;
