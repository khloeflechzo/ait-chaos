import React, { ReactElement } from 'react';

import ImagePreload from '@/components/ImagePreload';
import { TextBlockValue } from '@/constants/datas/contents';

import s from './styles.module.scss';

const TextBlock = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <ImagePreload src="/images/text-bg-wrapper.png" alt="text-block-wrapper" fill />
      <p>
        {TextBlockValue.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </p>
    </div>
  );
};

export default TextBlock;
