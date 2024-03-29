'use client';

import classNames from 'classnames';
import Image from 'next/image';
import React, { PropsWithChildren, ReactElement } from 'react';

import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import { useCubesStore } from '@/stores/useCubesStore';

import s from './styles.module.scss';

const WrapperBox = ({ children }: PropsWithChildren): ReactElement => {
  const { toggleActiveCard, activeCard } = useCubesStore();

  return (
    <div className={s.wrapper}>
      <ImagePlaceHolder src="/images/nft-box.png" fill alt="ntf-box" className={s.image} />
      <button
        className={classNames(s.btn, s.btn_prev)}
        onClick={() => toggleActiveCard(activeCard === 0 ? 4 : activeCard - 1)}
      >
        <Image alt="prev-btn" src="/images/prev-btn.png" fill />
      </button>
      <button
        className={classNames(s.btn, s.btn_next)}
        onClick={() => toggleActiveCard(activeCard === 4 ? 0 : activeCard + 1)}
      >
        <Image alt="next-btn" src="/images/next-btn.png" fill />
      </button>
      {children}
    </div>
  );
};

export default WrapperBox;
