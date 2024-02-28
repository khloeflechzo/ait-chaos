import Image from 'next/image';
import React, { ReactElement } from 'react';

import TwoBuyButtons from '@/components/TwoBuyButton';

import Address from '../Address';
import s from './styles.module.scss';

const BuyAndAddress = ({ adddressClass = '' }: { adddressClass?: string }): ReactElement => {
  return (
    <div className={s.wrapper_white}>
      <Image
        quality={100}
        src="/icons/buttons/buy-address.png"
        alt="text-block-wrapper"
        priority
        fill
      />
      <TwoBuyButtons />
      <Address className={adddressClass} />
    </div>
  );
};

export default BuyAndAddress;
