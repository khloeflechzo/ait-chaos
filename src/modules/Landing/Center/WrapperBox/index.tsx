'use client';

import classNames from 'classnames';
import Image from 'next/image';
import React, { PropsWithChildren, ReactElement } from 'react';

import ImagePlaceHolder from '@/components/ImagePlaceHolder';

import s from './styles.module.scss';

const WrapperBox = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className={s.wrapper}>
      <ImagePlaceHolder src="/images/nft-box.png" fill alt="ntf-box" className={s.image} />
      {/* <div className={s.elipse}></div> */}
      <button className={classNames(s.btn, s.btn_prev)}>
        <Image alt="prev-btn" src="/images/prev-btn.png" fill />
      </button>
      <button className={classNames(s.btn, s.btn_next)}>
        <Image alt="next-btn" src="/images/next-btn.png" fill />
      </button>
      {children}
    </div>
  );
};

export default WrapperBox;
