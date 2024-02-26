'use client';

import cn from 'classnames';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import { truncateEthAddress } from '@/utils/functions';

import ImagePreload from '../ImagePreload';
import s from './styles.module.scss';

const Address = ({ className }: { className?: string }): ReactElement => {
  const address = '0x22a3dcb11e75c7ffbed7431c95d29a50f5936667';

  return (
    <div className={cn(s.address, className)}>
      <ImagePreload src="/icons/buttons/white.png" alt="text-block-wrapper" priority fill />
      <button className={s.address_btn}>
        <div className={s.address_btn__content}>
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
