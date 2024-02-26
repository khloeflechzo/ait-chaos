import React, { ReactElement } from 'react';

import TwoBuyButtons from '@/components/TwoBuyButton';

import Address from '../Address';
import ImagePreload from '../ImagePreload';
import s from './styles.module.scss';

const BuyAndAddress = ({ adddressClass = '' }: { adddressClass?: string }): ReactElement => {
  return (
    <div className={s.wrapper_white}>
      <ImagePreload
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
