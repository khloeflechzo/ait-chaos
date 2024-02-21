import React, { ReactElement } from 'react';

import ImagePlaceHolder from '@/components/ImagePlaceHolder';

import s from './styles.module.scss';

const WrapperBox = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <ImagePlaceHolder src="/images/nft-box.png" fill alt="ntf-box" className={s.image} />
      <div className={s.elipse}></div>
    </div>
  );
};

export default WrapperBox;
