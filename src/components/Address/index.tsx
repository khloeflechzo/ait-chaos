'use client';

import cn from 'classnames';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import { truncateEthAddress } from '@/utils/functions';

import SvgInsert from '../SvgInsert';
import s from './styles.module.scss';

const Address = ({ className }: { className?: string }): ReactElement => {
  const address = '0x22a3dcb11e75c7ffbed7431c95d29a50f5936667';

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(address);
      }}
      className={cn(s.button, className)}
    >
      <SvgInsert src={`/icons/buttons/corner.svg`} className={cn(s.corner, s.corner__left)} />
      <div className={s.button__slice}></div>
      <SvgInsert src={`/icons/buttons/corner.svg`} className={cn(s.corner, s.corner__right)} />
      <button className={s.button_content}>
        <div className={s.button_content__value}>
          <p>
            CA $CHAOS: <span>{truncateEthAddress(address)}</span>
          </p>
          <Image src="/icons/copy.svg" alt="copy" width={24} height={24} />
        </div>
      </button>
    </div>
  );
};

export default Address;
